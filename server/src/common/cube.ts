export type ScryfallCardId = string;
export type CubeId = string;

export default class Cube {
    constructor(
        readonly id: CubeId,
        readonly name: string,
        readonly cardIds: Array<ScryfallCardId>
    ) {}
}
