import User from "../models/User";
import { IStatus } from "../types/IStatus";
import { Request, Response } from "express";

const user: User = new User();

export const createUser = (req: Request, res: Response) => {
  const parameters = req.body;
  const create = user.create(parameters, (status: IStatus) => {
    return res.json(status);
  });

  return create;
};

export const checkIfExists = (req: Request, res: Response) => {
  const parameters = req.body;
  const exists = user.checkIfExistUser(parameters, (status: IStatus) => {
    return res.json(status);
  });

  return exists;
};

export const updateUsername = (req: Request, res: Response) => {
  const parameters = req.body;
  const username = user.updateUsername(parameters, (status: IStatus) => {
    return res.json(status);
  });
  return username;
};
