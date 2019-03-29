import express from 'express';
import dotenv from 'dotenv';
import * as routes from './routes';
import * as bodyParser from 'body-parser'

dotenv.config();
const app = express();
app.use(bodyParser.json());

routes.register(app);

export default app;
