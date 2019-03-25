import express from 'express';
import dotenv from 'dotenv';
import * as routes from './routes';

dotenv.config();
const app = express();

routes.register(app);

export default app;
