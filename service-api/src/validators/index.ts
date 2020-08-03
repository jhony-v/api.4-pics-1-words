import { Request, Response, NextFunction } from "express"
import { validationResult, Result, ValidationError } from "express-validator";
import { BAD_REQUEST } from "http-status-codes";


const useValidationMiddleware = (req: Request, res: Response, next : NextFunction) => {
    const errors : Result<ValidationError> = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(BAD_REQUEST).json({ errors : errors.array() });
    }
    next();
};

export default useValidationMiddleware;
