import { Request, Response } from "express";
import firebase from "../config/authFirebase";
import User from "../models/User";
import { IStatus } from "../types/IStatus";

const database: firebase.database.Database = firebase.database();
const user : User = new User(database);

export const createUser = ( req : Request , res : Response) => {
    const parameters = req.body;
    return user.create(parameters, (status: IStatus) => res.json(status));
}

export const checkIfExists = ( req : Request , res : Response) => {
    const parameters = req.body;
    return user.checkIfExistUser(parameters, (status: IStatus) => res.json(status));
}
