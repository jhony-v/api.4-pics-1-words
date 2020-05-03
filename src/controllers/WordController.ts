import Controller from "./Controller"
import Word from "../models/Word";
import { IStatus } from "../types/IStatus";
import { IWord } from "../types/IModel";
import { Request, Response } from "express";

class WordController extends Controller<Word>{
  constructor(){
    super(new Word());
  }

  getAllWords = (req: Request, res: Response) => {
    const parameters = req.query;
    const all = this.model.read(parameters, (data: IWord) => {
      return res.json(data);
    });

    return all;
  };

  getWordById = (req: Request, res: Response) => {
    const { id } = req.params;
    const byId = this.model.byId(id, (data: IWord) => {
      return res.json(data);
    });

    return byId;
  };

  createNewWord = (req: Request, res: Response) => {
    const parameters = req.body;
    const create = this.model.create(parameters, (status: IStatus) => {
      return res.json(status);
    });

    return create;
  };

  updateWord = (req: Request, res: Response) => {
    const parameters = req.body;
    const update = this.model.updateWord(parameters, (status: IStatus) => {
      return res.json(status);
    });

    return update;
  };

  incrementPointsWordDiscover = (req: Request, res: Response) => {
    const { id } = req.body;
    const incrementPoints = this.model.incrementPoints(id, (status: IStatus) => {
      return res.json(status);
    });

    return incrementPoints;
  };
}

export default WordController;
