import FetchCubeAction from './actions/fetch-cube';
import CubeStore from './data/cube-store';
import FirebaseCubeStore from './data/firebase-cube-store';
import * as admin from 'firebase-admin';
import Config from './config';
import StoreCubeAction from './actions/store-cube';

export default class Actions {
    private cubeStore?: CubeStore;
    public constructor(private readonly config: Config) {}

    private async createCubeStore(): Promise<CubeStore> {
        if (this.config.useFirestoreEmulator) {
            return await this.createEmulatorCubeStore();
        } else {
            return this.createRealCubeStore();
        }
    }

    private async getCubeStore(): Promise<CubeStore> {
        if (!this.cubeStore) {
            this.cubeStore = await this.createCubeStore();
        }

        return this.cubeStore;
    }

    private createRealCubeStore(): FirebaseCubeStore {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: this.config.firebaseProjectId,
                clientEmail: this.config.firebaseClientEmail,
                privateKey: this.config.firebasePrivateKey,
            }),
        });

        const cubes = admin.firestore().collection('cubes');

        return new FirebaseCubeStore(cubes);
    }

    private async createEmulatorCubeStore(): Promise<FirebaseCubeStore> {
        // Dynamic import with string indirection of testing library that
        // connects to emulator so that production doesn't install this
        // dependency
        const module = '@firebase/testing';
        const admin = await import(module);
        const db = admin.initializeAdminApp({
            projectId: this.config.firebaseProjectId,
        }).firestore();
        return new FirebaseCubeStore(db.collection('cubes'));
    }

    async storeCubeAction(): Promise<StoreCubeAction> {
        return new StoreCubeAction(await this.getCubeStore());
    }

    async fetchCubeAction(): Promise<FetchCubeAction> {
        return new FetchCubeAction(await this.getCubeStore());
    }
}
