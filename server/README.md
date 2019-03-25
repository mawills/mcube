Get started by running `cp .env.example .env` in the /server directory.

### `yarn start`

Serves on port 3001 by default

### `yarn test`

Run test suite. Optionally, run `yarn test filename` to run a specific test file or `yarn test-once` to run only once

To run integration tests, make sure you have the firestore emulator running on your local machine on port 8080

See [here](https://firebase.google.com/docs/firestore/security/test-rules-emulator#install_the_emulator) for details
on installing and setting up the local emulator

### `yarn debug`

Like `yarn start` except it also prints express debug info into the terminal

### `yarn build`

Runs the Typescript compiler and builds to dist/\*

### `yarn clean`

Deletes the contents of the dist/\* directory
