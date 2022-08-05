import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  protected middleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.json('app from TS');
    });
    this.app.route('/').post((req: Request, res: Response) => {
      res.json(req.body);
    });
  }
}

const port = 3000;
const app = new App().app;
app.listen(port, () => {
  console.log(`this app running at http://localhost:${port}`);
});
