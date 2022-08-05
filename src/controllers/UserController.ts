import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import IController from './ControllerInteface';

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.json('index boss');
  }
  store(req: Request, res: Response): Response {
    return res.json(req.body);
  }
}

export default new UserController();
