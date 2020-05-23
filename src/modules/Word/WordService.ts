import FirebaseService from "../../lib/FirebaseService";
import WordModel, { PropsWord } from "./WordModel";

type PromiseWord = Promise<PropsWord>;

export default class WordService extends FirebaseService {
  private word: WordModel;

  constructor(word: WordModel) {
    super(word.toString());
    this.word = word;
  }

  create(): PromiseWord {
    return new Promise((resolve, reject) => {
      this.ref(this.createKey()).set(this.word.dataCreate(), (error) => {
        resolve(this.word.dataCreate());
      });
    });
  }

  getAllWord() {
    return new Promise((resolve, reject) => {
      this.ref().orderByChild("letters").startAt(0).limitToFirst(10).once("value", (data) => {
          resolve(data.toJSON());
        });
    });
  }

  getWordById() {
    return new Promise((resolve,reject) => {
      this.ref(this.word.idword).once('value',data => {
        resolve(data.toJSON());
      });
    });
  }

  searchWordById() {}

  updateWord() {}

  incrementPoints() {
    return new Promise((resolve, reject) => {
      this.ref(this.word.idword).child("points").transaction(this.word.incrementPoints, (error) => {
          resolve({});
        });
    });
  }
}
