import express, { Application, Request, Response } from 'express';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.json('app from TS');
    });
  }
}

const port = 3000;
const app = new App().app;
app.listen(port, () => {
  console.log(`this app running at http://localhost:${port}`);
});
