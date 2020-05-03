import Word from "../models/Word";
import { IStatus } from "../types/IStatus";
import { IWord } from "../types/IModel";
import { Request, Response } from "express";

const word: Word = new Word();

export const getAllWords = (req: Request, res: Response) => {
  const parameters = req.query;
  const all = word.read(parameters,(data: IWord) => {
    return res.json(data);
  });

  return all;
};

export const getWordById = (req: Request, res: Response) => {
  const { id } = req.params;
  const byId = word.byId(id, (data: IWord) => {
    return res.json(data);
  });

  return byId;
};

export const createNewWord = (req: Request, res: Response) => {
  const parameters = req.body;
  const create = word.create(parameters, (status: IStatus) => {
    return res.json(status);
  });

  return create;
};

export const updateWord = ( req: Request , res: Response) => {
  const parameters = req.body;
  const update = word.updateWord(parameters ,(status : IStatus) => {
    return res.json(status);
  });
  
  return update;
};

export const incrementPointsWordDiscover = (req: Request, res: Response) => {
  const { id } = req.body;
  const incrementPoints = word.incrementPoints(id, (status: IStatus) => {
    return res.json(status);
  });

  return word;
};
