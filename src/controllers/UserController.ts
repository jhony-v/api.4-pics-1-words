import Controller from "./Controller"
import User from "../models/User";
import { IStatus } from "../types/IStatus";
import { Request, Response } from "express";

class UserController extends Controller<User> { 
  constructor() {
    super(new User());
  }
  createUser = (req: Request, res: Response) => {
    const parameters = req.body;
    const create = this.model.create(parameters, (status: IStatus) => {
      return res.json(status);
    });

    return create;
  };

  checkIfExists = (req: Request, res: Response) => {
    const parameters = req.body;
    const exists = this.model.checkIfExistUser(parameters, (status: IStatus) => {
      return res.json(status);
    });

    return exists;
  };

  updateUsername = (req: Request, res: Response) => {
    const parameters = req.body;
    const username = this.model.updateUsername(parameters, (status: IStatus) => {
      return res.json(status);
    });
    return username;
  };
}

export default UserController;
