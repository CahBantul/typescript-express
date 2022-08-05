import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

// router
import UserRoutes from './routers/UserRoutes';

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
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(helmet());
  }

  protected routes(): void {
    this.app.use('/', UserRoutes);
  }
}

const port = 3000;
const app = new App().app;
app.listen(port, () => {
  console.log(`this app running at http://localhost:${port}`);
});
