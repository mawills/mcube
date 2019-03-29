import CubeStore from './cube-store';
import Cube, { CubeId } from '../common/cube';

export default class InMemoryCubeStore implements CubeStore {
    private readonly cubesById: Map<CubeId, Cube>;

    constructor(cubes: Array<Cube> = []) {
        this.cubesById = cubes.reduce(
            (map, cube) => map.set(cube.id, cube),
            new Map<CubeId, Cube>()
        );
    }

    async fetchCube(id: CubeId): Promise<Cube | undefined> {
        return this.cubesById.get(id);
    }

    async storeCube(cube: Cube): Promise<void> {
        this.cubesById.set(cube.id, cube);
    }
}
