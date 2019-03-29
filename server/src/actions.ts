import FetchCubeAction from './actions/fetch-cube';
import CubeStore from './data/cube-store';
import FirebaseCubeStore from './data/firebase-cube-store';
import { initializeAdminApp } from '@firebase/testing';
import * as admin from 'firebase-admin';
import Config from './config';
import StoreCubeAction from './actions/store-cube';

export default class Actions {
    public constructor(private readonly config: Config) {}

    private cubeStore(): CubeStore {
        if (this.config.useFirestoreEmulator) {
            return this.emulatorCubeStore();
        } else {
            return this.realCubeStore();
        }
    }

    private realCubeStore(): FirebaseCubeStore {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: this.config.firebasePrivateKey,
                clientEmail: this.config.firebaseClientEmail,
                privateKey: this.config.firebasePrivateKey,
            }),
        });

        const cubes = admin.firestore().collection('cubes');

        return new FirebaseCubeStore(cubes);
    }

    private emulatorCubeStore(): FirebaseCubeStore {
        const db = initializeAdminApp({
            projectId: this.config.firebaseProjectId,
        }).firestore();
        return new FirebaseCubeStore(db.collection('cubes'));
    }

    storeCubeAction(): StoreCubeAction {
        return new StoreCubeAction(this.cubeStore());
    }

    fetchCubeAction(): FetchCubeAction {
        return new FetchCubeAction(this.cubeStore());
    }
}
