import {initializeAdminApp} from '@firebase/testing';
import Cube from '../../src/common/cube';
import FirebaseCubeStore from '../../src/data/firebase-cube-store';
import MapCubeStore from '../../src/data/map-cube-store';
import CubeStore from '../../src/data/cube-store';

const firestoreCubeStoreFactory = () => {
    // Generate a random project id because firestore is used across test suites
    const projectId =
        Math.random()
            .toString(36)
            .substring(2, 15) +
        Math.random()
            .toString(36)
            .substring(2, 15);

    const db = initializeAdminApp({projectId: projectId}).firestore();
    return new FirebaseCubeStore(db.collection('cubes'));
};

const arrayCubeStoreFactory = () => new MapCubeStore();

const seedCubes = async (store: CubeStore, cubes: Cube[]) => {
    for (const cube of cubes) {
        await store.storeCube(cube);
    }
};

// Test both the real firestore cube store and the fake array cube store with the same tests, that way when we use
// MapCubeStore in higher level tests, we're sure the behavior is the same
describe.each([firestoreCubeStoreFactory, arrayCubeStoreFactory])(
    'CubeStore Tests',
    storeFactory => {
        let store: CubeStore;
        beforeEach(() => {
            store = storeFactory();
        });

        it('returns undefined for nonexistant cubes', async () => {
            expect(await store.fetchCube('nonexistent')).toBe(undefined);
        });

        it('can store and retrieve cubes', async () => {
            const cube = new Cube('cube-id', 'Cube Name', [
                'card-id-1',
                'card-id-2',
            ]);

            await store.storeCube(cube);
            const result = await store.fetchCube(cube.id);
            expect(result).toEqual(cube);
        });

        it('finds the correct cube by id', async () => {
            const cubes = [
                new Cube('cube-1', 'Cube One', ['card-1']),
                new Cube('cube-2', 'Cube Two', ['card-1', 'card-2']),
                new Cube('cube-3', 'Cube Three', [
                    'card-1',
                    'card-2',
                    'card-3',
                ]),
            ];
            await seedCubes(store, cubes);

            for (const cube of cubes) {
                expect(await store.fetchCube(cube.id)).toEqual(cube);
            }
        });

        it('updates the correct cube by id', async () => {
            const cubes = [
                new Cube('cube-1', 'Cube One', ['card-1']),
                new Cube('cube-2', 'Cube Two', ['card-1', 'card-2']),
                new Cube('cube-3', 'Cube Three', [
                    'card-1',
                    'card-2',
                    'card-3',
                ]),
            ];
            await seedCubes(store, cubes);

            for (const cube of cubes) {
                const newCube = new Cube(
                    cube.id,
                    cube.name + 'new',
                    cube.cardIds
                );
                await store.storeCube(newCube);
                expect(await store.fetchCube(newCube.id)).toEqual(newCube);
            }
        });
    }
);
