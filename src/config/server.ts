import express, { Express } from "express";
import cors from "cors";
import compression from "compression";
import auth from "../middlewares/auth";
import routes from "../routes";

export default class Server {
  private app: Express;
  constructor(app: Express) {
    this.app = app;
  }

  public api(prefix: string): void {
    this.app.use(prefix, auth, routes);
  }

  public configuration(): void {
    this.app.disable('x-powered-by');
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public async run(): Promise<void> {
    await this.app.listen(process.env.PORT || 3000);
  }
}
