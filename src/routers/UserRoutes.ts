import { Router, Request, Response } from 'express';

// controllers
import UserController from '../controllers/UserController';

class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get('/', UserController.index);
    this.router.post('/', UserController.store);
  }
}

export default new UserRoutes().router;
