import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../../config/env";
import { NOT_FOUND,UNAUTHORIZED } from "http-status-codes";

// authorization to access the service
const auth = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  const authorization = headers["authorization"] || headers["x-access-token"];

  if (!authorization) {
    return res.status(UNAUTHORIZED).send("Access denied. No Token provider");
  }
  try {
    let decode = jwt.verify(<string>authorization, <string>env.KEY_JWT);
    if (decode) {
      req.body = req.body;
      next();
    }
  } catch {
    return res.status(NOT_FOUND).send("Invalid token");
  }
};

export default auth;
