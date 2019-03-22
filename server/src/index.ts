import express from 'express';
import dotenv from 'dotenv';
import * as routes from './routes';

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

routes.register(app);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
