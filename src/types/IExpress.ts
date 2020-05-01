import { Request, Response, NextFunction } from "express";

export interface IRouteController {
  req: Request;
  res: Response;
  next: NextFunction;
}
