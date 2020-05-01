import Word from "../models/Word";
import { IStatus } from "../types/IStatus";
import { IWord } from "../types/IModel";
import { IRouteController } from "../types/IExpress";

const word: Word = new Word();

export const getAllWords = ({ req, res }: IRouteController) => {
  const all = word.readAll((data: IWord) => {
    return res.json(data);
  });

  return all;
};

export const getWordById = ({ req, res }: IRouteController) => {
  const { id } = req.params;
  const byId = word.byId(id, (data: IWord) => {
    return res.json(data);
  });

  return byId;
};

export const createNewWord = ({ req, res }: IRouteController) => {
  const parameters = req.body;
  const create = word.create(parameters, (status: IStatus) => {
    return res.json(status);
  });

  return create;
};

export const incrementPointsWordDiscover = ({ req, res }: IRouteController) => {
  const { id } = req.body;
  const incrementPoints = word.incrementPoints(id, (status: IStatus) => {
    return res.json(status);
  });

  return word;
};
