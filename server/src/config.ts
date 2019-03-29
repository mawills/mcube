export default class Config {
    constructor(
        public readonly useFirestoreEmulator: boolean = process.env
            .USE_FIRESTORE_EMULATOR === 'true',
        public readonly firebaseProjectId: string = process.env
            .FIREBASE_PROJECT_ID,
        public readonly firebaseClientEmail: string = process.env
            .FIREBASE_PROJECT_EMAIL,
        public readonly firebasePrivateKey: string = process.env
            .FIREBASE_PRIVATE_KEY
    ) {}
}
