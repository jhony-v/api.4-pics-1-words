import express, { Express } from "express";
import cors from "cors";
import compression from "compression";
import auth from "../api/middlewares/auth";
import routes from "../api/routes";
import ServerAdapter from "./adapters/ServerAdapter";

export default class ApiServer implements ServerAdapter<Express>{
  private app: Express;
  constructor() {
    this.app = express();
    this.configuration();
    this.api();
  }

  private api(): void {
    this.app.use("/api/v1", auth, routes);
  }

  private configuration(): void {
    this.app.disable("x-powered-by");
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  instance() {
    return this.app;
  }
}
