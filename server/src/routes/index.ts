import * as express from 'express';
import Actions from '../actions';
import Config from '../config';
import { NextFunction, RequestHandler } from 'express';

const asyncRoute = (fn: RequestHandler) => (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export const register = (app: express.Application) => {
    const actions = new Actions(new Config());
    // define a route handler for the default home page
    app.get('/api/', (req, res) => {
        res.send('Hello world!!');
    });

    app.get('/api/cards', (req: any, res) => {
        res.json('this is a card');
    });

    app.post(
        '/api/cubes',
        asyncRoute(async (req, res) => {
            res.json(
                await actions
                    .storeCubeAction()
                    .run(req.body.name, req.body.cardIds)
            );
        })
    );

    app.get(
        '/api/cubes/:cubeId',
        asyncRoute(async (req, res) => {
            let cube = await actions.fetchCubeAction().run(req.params.cubeId);
            res.json(cube);
        })
    );
};
