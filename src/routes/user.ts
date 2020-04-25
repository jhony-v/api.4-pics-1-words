import { Router, Request, Response } from "express";
import firebase from "../config/authFirebase";
import User from "../models/User";
import { IStatus } from "../types/IStatus";

const router = Router();
const database: firebase.database.Database = firebase.database();
const user : User = new User(database);

// create new user
router.post("/", ( req : Request , res : Response) => {
    const parameters = req.body;
    return user.create(parameters, (status: IStatus) => res.json(status));
})

// check if exists the user
router.post("/exists", ( req : Request , res : Response) => {
    const parameters = req.body;
    return user.checkIfExistUser(parameters, (status: IStatus) => res.json(status));
})

export default router;