import User from "../models/User";
import { IStatus } from "../types/IStatus";
import { IRouteController } from "../types/IExpress";

const user: User = new User();

export const createUser = ({ req, res }: IRouteController) => {
  const parameters = req.body;
  const create = user.create(parameters, (status: IStatus) => {
    return res.json(status);
  });

  return create;
};

export const checkIfExists = ({ req, res }: IRouteController) => {
  const parameters = req.body;
  const exists = user.checkIfExistUser(parameters, (status: IStatus) => {
    return res.json(status);
  });

  return exists;
};

export const updateUsername = ({ req, res }: IRouteController) => {
  const parameters = req.body;
  const username = user.updateUsername(parameters, (status: IStatus) => {
    return res.json(status);
  });
  return username;
};
