import { Router } from "express";

class Route {
  public router: Router = Router();
  public controller: any;
  
  start(): Router {
    return this.router;
  }
}

export default Route;
