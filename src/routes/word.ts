import { Router, Request, Response } from "express";
import firebase from "../config/authFirebase";
import Word from "../models/Word";
import { IStatus } from "../types/IStatus";

const router = Router();
const database: firebase.database.Database = firebase.database();
const word: Word = new Word(database);

//get all words
router.get("/", ( req : Request , res : Response) => {
    return word.readAll((data: [Object] & Object) => res.json(data));
})

//get a wrod according to id
router.get("/:id", ( req : Request , res: Response) => {
    const { id } = req.params;
    return word.byId(id, (data: Object) => res.json(data));
})

// create new word
router.post("/", ( req : Request , res : Response) => {
    const parameters = req.body;
    return word.create(parameters, (status: IStatus) => res.json(status));
})

//increment the points of word
router.post("/increment", ( req : Request , res : Response) => {
    const { id } = req.body;
    return word.incrementPoints(id, (status: IStatus) => res.json(status));

})

export default router;