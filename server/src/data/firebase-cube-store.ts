import CubeStore from './cube-store';
import Cube, { CubeId } from '../common/cube';
import { classToPlain, plainToClass } from 'class-transformer';

interface FireCollection {
    doc(id: string): FireDoc;
}

interface FireDoc {
    get(): Promise<FireSnapshot>;
    set(value: object): Promise<any>;
}

interface FireSnapshot {
    data(): object;
}

export default class FirebaseCubeStore implements CubeStore {
    constructor(private readonly cubes: FireCollection) {}

    async fetchCube(id: CubeId): Promise<Cube | undefined> {
        const snapshot = await this.cubes.doc(id).get();
        return snapshot === undefined
            ? undefined
            : plainToClass(Cube, snapshot.data());
    }

    async storeCube(cube: Cube): Promise<void> {
        await this.cubes.doc(cube.id).set(classToPlain(cube));
    }
}
