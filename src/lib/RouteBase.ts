import { Router } from "express";

export default abstract class RouteBase<T_Controller> {
  protected router: Router;
  protected controller: T_Controller;

  constructor(controller: T_Controller) {
    this.router = Router();
    this.controller = controller;
  }

  protected start(): Router {
    return this.router;
  }
}
