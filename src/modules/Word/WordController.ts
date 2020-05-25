import { Request, Response } from "express";
import WordModel from "./WordModel";
import WordService from "./WordService";

export default class WordController {
  async getAllWords(req: Request, res: Response) {
    const word = new WordModel();
    const service = new WordService(word);
    const response = await service.getAllWord();
    return res.json(response);
  }

  async getWordById(req: Request, res: Response) {
    const id = req.params.id;
    const word = new WordModel();
    word.idword = id;
    const service = new WordService(word);
    const response = await service.getWordById();
    return res.json(response);
  }

  async createNewWord(req: Request, res: Response) {
    const parameters = req.body;
  }

  async updateWord(req: Request, res: Response) {
    const parameters = req.body;
    const idword = req.params.id;
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
