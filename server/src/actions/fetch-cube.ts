import CubeStore from '../data/cube-store';
import Cube, { CubeId } from '../common/cube';

export default class FetchCubeAction {
    public constructor(private readonly cubeStore: CubeStore) {}

    public async run(cubeId: CubeId): Promise<Cube> {
        //TODO: Enforce permissions, load card info from scryfall, etc..
        return this.cubeStore.fetchCube(cubeId);
    }
}
