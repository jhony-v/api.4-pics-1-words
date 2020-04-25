import { Router } from "express";
import { IStatus } from "../types/IStatus";
import * as word from "../controllers/word.controller";

const router = Router();

//get all words
router.get("/",word.getAllWords);

//get a wrod according to id
router.get("/:id",word.getWordById);

// create new word
router.post("/",word.createNewWord);

//increment the points of word
router.post("/increment",word.incrementPointsWordDiscover);

export default router;