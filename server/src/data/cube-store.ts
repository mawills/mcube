import Cube, { CubeId } from '../common/cube';

export default interface CubeStore {
    fetchCube(id: CubeId): Promise<Cube>;
    storeCube(cube: Cube): Promise<void>;
}
