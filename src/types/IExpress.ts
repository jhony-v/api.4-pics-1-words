import { Request, Response } from "express";

export interface IRouter {
  req: Request;
  res: Response;
}
