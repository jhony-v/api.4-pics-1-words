import jwt from "jsonwebtoken";
import { KEY_JWT } from "../config/env";
import { IRouteController } from "../types/IExpress";

// authorization to access the service
const auth = ({ req, res, next }: IRouteController) => {
  const headers = req.headers;
  const authorization = headers["authorization"] || headers["x-access-token"];

  if (!authorization) {
    return res.status(401).send("Access denied. No Token provider");
  }
  try {
    let decode = jwt.verify(<string>authorization, KEY_JWT);
    if (decode) {
      req.body = req.body;
      next();
    }
  } catch {
    return res.status(404).send("Invalid token");
  }
};

export default auth;
