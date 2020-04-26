import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { KEY_JWT } from "../config/env";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const authorization  = headers["authorization"] || headers["x-access-token"];
    
    if (!authorization) {
        return res.status(401).send("Access denied. No Token provider");
    }
    try {

        let decode = jwt.verify( <string>authorization , KEY_JWT );
        if (decode) {
            req.body = req.body;
            next();
        }
    }
    catch {
        return res.status(404).send("Invalid token");
    }
}

export default auth;
