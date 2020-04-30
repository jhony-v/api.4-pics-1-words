import { Request, Response } from "express";
import firebase from "../config/firebase";
import Word from "../models/Word";
import { IStatus } from "../types/IStatus";
import { FireDataBase } from "../types/IFirebase";
import { IWord } from "../types/IWord";

const database: FireDataBase = firebase.database();
const word: Word = new Word(database);

export const getAllWords = (req: Request, res: Response) => {
    const all = word.readAll((data: IWord) => {
        return res.json(data);
    }); 

    return all;
}

export const getWordById = (req: Request, res: Response) => {
    const { id } = req.params;
    const byId = word.byId(id, (data: IWord) => {
        return res.json(data);
    });

    return byId;
}

export const createNewWord = (req: Request, res: Response) => {
    const parameters = req.body;
    const create = word.create(parameters, (status: IStatus) => {
        return res.json(status);
    });

    return create;
}

export const incrementPointsWordDiscover = (req: Request, res: Response) => {
    const { id } = req.body;
    const incrementPoints = word.incrementPoints(id, (status: IStatus) => {
        return res.json(status);
    });

    return word;
}


