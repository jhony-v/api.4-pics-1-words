import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const authorization = headers["authorization"] || headers["x-access-token"];
    if (!authorization) {
        return res.status(401).send("Access denied. No Token provider");
    }
    try {
        req.body = "ok";
        next();
    } 
    catch {
        return res.status(404).send("Invalid token");
    }
}

export default auth;
