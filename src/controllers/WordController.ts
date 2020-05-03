import Controller from "./Controller"
import Word from "../models/Word";
import { IStatus } from "../types/IStatus";
import { IWord } from "../types/IModel";
import { Request, Response } from "express";

export default class WordController extends Controller<Word>{
  constructor(){
    super(new Word());
  }

  public getAllWords = async (req: Request, res: Response) => {
    const parameters = req.query;
    const all = await this.model.read(parameters, (data: IWord) => data);
    return res.json(all);
  };

  public getWordById = (req: Request, res: Response) => {
    const { id } = req.params;
    const byId = this.model.byId(id, (data: IWord) => {
      return res.json(data);
    });
    return byId;
  };

  public createNewWord = (req: Request, res: Response) => {
    const parameters = req.body;
    const create = this.model.create(parameters, (status: IStatus) => {
      return res.json(status);
    });
    return create;
  };

  public updateWord = (req: Request, res: Response) => {
    const parameters = req.body;
    const update = this.model.updateWord(parameters, (status: IStatus) => {
      return res.json(status);
    });
    return update;
  };

  public incrementPointsWordDiscover = (req: Request, res: Response) => {
    const { id } = req.body;
    const incrementPoints = this.model.incrementPoints(id, (status: IStatus) => {
      return res.json(status);
    });
    return incrementPoints;
  };
}