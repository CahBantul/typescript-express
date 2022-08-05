"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    index(req, res) {
        return res.json('index boss');
    }
    store(req, res) {
        return res.json(req.body);
    }
}
exports.default = new UserController();
