import FirebaseService from "../../lib/FirebaseService";
import WordModel, { PropsWord } from "./WordModel";

type PromiseWord = Promise<PropsWord>;

export default class WordService extends FirebaseService {
    private word : WordModel;
    
    constructor(word : WordModel){
        super(word.toString());
        this.word = word;
    }

}