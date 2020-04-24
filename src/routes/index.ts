import { Router, Request, Response } from "express"
import User from "../model/User";
import Word from "../model/Word";
import { USER, WORD } from "../utils/constants";
import firebase from "../config/authFirebase";
import { IStatus } from "../types/IStatus";
import { status } from "../utils/help";


const router = Router();
const database: firebase.database.Database = firebase.database();
const user: User = new User(database);
const word: Word = new Word(database);


// create a user or word , before verifiy the type 
router.post("/create", (req: Request, res: Response) => {
    const { type } = req.query;
    const parameters = req.body;
    switch (type) {
        case USER:
            return user.create(parameters, (e: IStatus) => res.json(e));
        case WORD:
            return word.create(parameters, (e: IStatus) => res.json(e));
        default:
            return res.status(404).json(status(Infinity));
    }
})


// get all words
router.get("/word", (req: Request, res: Response) => {
    return word.readAll((e: [Object] & Object) => res.json(e));
});


// get a word according to id
router.get("/word/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    return word.byId(id, (e: Object) => res.json(e));
});


router.post("/word/increment", (req: Request, res: Response) => {
    const { id } = req.body;
    return word.incrementPoints(id, (e: IStatus) => res.json(e));
});


export default router;
