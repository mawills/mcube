export default class Config {
    public readonly firebasePrivateKey: string;

    constructor(
        public readonly useFirestoreEmulator: boolean = process.env
            .USE_FIRESTORE_EMULATOR === 'true',
        public readonly firebaseProjectId: string = process.env
            .FIREBASE_PROJECT_ID,
        public readonly firebaseClientEmail: string = process.env
            .FIREBASE_PROJECT_EMAIL,
        firebasePrivateKey: string = process.env
            .FIREBASE_PRIVATE_KEY
    ) {
        this.firebasePrivateKey = Buffer.from(firebasePrivateKey, 'base64').toString('ascii');
    }
}
