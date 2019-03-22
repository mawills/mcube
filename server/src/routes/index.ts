import * as express from 'express';

export const register = (app: express.Application) => {
    // define a route handler for the default home page
    app.get('/', (req, res) => {
        res.send('Hello world!!');
    });

    app.get('/cards', (req: any, res) => {
        res.json('this is a card');
    });
};
