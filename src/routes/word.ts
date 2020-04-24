import { Router, Request, Response } from "express";

const router = Router();

//get all words
router.get("/", ( req : Request , res : Response) => {

})

//get a wrod according to id
router.get("/:id", ( req : Request , res: Response) => {

})

// create new word
router.post("/", ( req : Request , res : Response) => {

})

//increment the points of word
router.post("/increment", ( req : Request , res : Response) => {

})

export default router;