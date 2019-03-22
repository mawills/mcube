"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = (app) => {
    // define a route handler for the default home page
    app.get('/', (req, res) => {
        res.send('Hello world!!');
    });
    app.get('/cards', (req, res) => {
        res.json('this is a card');
    });
};
//# sourceMappingURL=index.js.map