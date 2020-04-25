import { Request, Response } from "express";
import firebase from "../config/authFirebase";
import Word from "../models/Word";
import { IStatus } from "../types/IStatus";

const database: firebase.database.Database = firebase.database();
const word: Word = new Word(database);

export const getAllWords = (req: Request, res: Response) => {
    return word.readAll((data: [Object] & Object) => res.json(data));
};

export const getWordById = (req: Request, res: Response) => {
    const { id } = req.params;
    return word.byId(id, (data: Object) => res.json(data));
};

export const createNewWord = (req: Request, res: Response) => {
    const parameters = req.body;
    return word.create(parameters, (status: IStatus) => res.json(status));
};

export const incrementPointsWordDiscover = (req: Request, res: Response) => {
    const { id } = req.body;
    return word.incrementPoints(id, (status: IStatus) => res.json(status));
};
