import { Request, Response } from "express";
import WordModel from "./WordModel";
import WordService from "./WordService";

export default class WordController {
  async getAllWords(req: Request, res: Response) {
    const { start , limit } = req.query;
    const word = new WordModel();
    const service = new WordService(word);
    const response = await service.getAllWord(start,limit);
    return res.json(response);
  }

  async getWordById(req: Request, res: Response) {
    const { id } = req.params;
    const word = new WordModel();
    word.idword = id;
    const service = new WordService(word);
    const response = await service.getWordById();
    return res.json(response);
  }

  async createNewWord(req: Request, res: Response) {
    const parameters = req.body;
    const word = new WordModel();
    word.props = parameters;
    const service = new WordService(word);
    const response = await service.createWord();
    return res.json(response);
  }

  async updateWord(req: Request, res: Response) {
    const parameters = req.body;
    const { id } = req.params;
    const word = new WordModel();
    word.idword = id;
    word.props = parameters;
    const service = new WordService(word);
    const response = await service.updateWord();
    return res.json(response);
  }

  async incrementPointsWordDiscover(req: Request, res: Response) {
    const id = req.params.id;
    const word = new WordModel();
    word.idword = id;
    const service = new WordService(word);
    const response = await service.incrementPoints();
    return res.json(response);
  }
}
