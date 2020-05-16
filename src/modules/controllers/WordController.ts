import Controller from "./Controller"
import { Request, Response } from "express";
import { Word } from "../models";
import { IWord } from "../models/Word/WordInterface";
import { IStatus } from "../../config/firebase";

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
    const idword = req.params.id;
    const update = this.model.updateWord({idword,...parameters}, (status: IStatus) => {
      return res.json(status);
    });
    return update;
  };

  public incrementPointsWordDiscover = (req: Request, res: Response) => {
    const idword = req.params.id;
    const incrementPoints = this.model.incrementPoints({idword}, (status: IStatus) => {
      return res.json(status);
    });
    return incrementPoints;
  };
}
