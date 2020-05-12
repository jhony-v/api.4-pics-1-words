import Controller from "./Controller"
import User from "../models/User";
import { IStatus } from "../types/IStatus";
import { Request, Response } from "express";

export default class UserController extends Controller<User> { 
  constructor() {
    super(new User());
  }

  public createUser = (req: Request, res: Response) => {
    const parameters = req.body;
    const create = this.model.create(parameters, (status: IStatus) => {
      return res.json(status);
    });
    return create;
  };

  public checkIfExists = (req: Request, res: Response) => {
    const parameters = req.body;
    const exists = this.model.checkIfExistUser(parameters, (status: IStatus) => {
      return res.json(status);
    });
    return exists;
  };

  public updateUser = (req: Request, res: Response) => {
    const parameters = req.body;
    const username = this.model.updateUser(parameters, (status: IStatus) => {
      return res.json(status);
    });
    return username;
  };

  public incrementPointsDiscoverByDay = ( req : Request , res : Response) => {
    const id = req.params.id;
    const incrementPointByDay = this.model.incrementPointsDiscoverByDay({iduser:id},(status:IStatus) => {
      return res.json(status);
    });
    return incrementPointByDay;
  }
}