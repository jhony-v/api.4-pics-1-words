import { Request, Response } from "express";
import UserService from "./UserService";
import UserModel from "./UserModel";
import { OK } from "http-status-codes";

export default class UserController {
  async createUser(req: Request, res: Response) {
    const user = new UserModel();
    user.username = req.body.username;
    user.pass = req.body.pass;
    const service = new UserService(user);
    const response = await service.create();
    return res.status(OK).json(response);
  }

  async checkIfExists(req: Request, res: Response) {
      const user = new UserModel();
      user.username = req.body.username;
      user.pass = req.body.pass;
      const service = new UserService(user);
      const response = await service.checkIfUserExists();
      return res.status(OK).json(response);
  }

  async updateUser(req: Request, res: Response) {
    const user = new UserModel();
    user.iduser = req.params.id;
    user.props = req.body;
    const service = new UserService(user);
    const response = await service.updateUser();
    return res.status(OK).json(response);
  }

  async incrementPointsDiscoverByDay(req: Request, res: Response) {
    const user = new UserModel();
    user.iduser = req.params.id;
    const service = new UserService(user);
    const response = await service.incrementPointsDiscoverByDay();
    return res.status(OK).json(response);
  }
}
