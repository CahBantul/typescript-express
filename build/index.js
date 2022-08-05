"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.json('app from TS');
        });
        this.app.route('/').post((req, res) => {
            res.json(req.body);
        });
    }
}
const port = 3000;
const app = new App().app;
app.listen(port, () => {
    console.log(`this app running at http://localhost:${port}`);
});
