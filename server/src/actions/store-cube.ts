import CubeStore from '../data/cube-store';
import Cube from '../common/cube';
import * as uuid from 'uuid';

export default class StoreCubeAction {
    public constructor(private readonly cubeStore: CubeStore) {}

    public async run(name: string, cardIds: Array<string>): Promise<Cube> {
        //TODO: Enforce permissions, verify card info from scryfall, etc..
        const cube = new Cube(uuid.v4(), name, cardIds);
        await this.cubeStore.storeCube(cube);
        return cube;
    }
}
