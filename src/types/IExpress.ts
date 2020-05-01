import { Request, Response } from "express";

export interface IRouteController {
  req: Request;
  res: Response;
}
