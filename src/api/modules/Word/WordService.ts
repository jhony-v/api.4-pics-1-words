import FirebaseService from "../../../lib/base/FirebaseService";
import WordModel, { PropsWord, TWord } from "./WordModel";

type PromiseWord = Promise<PropsWord>;

export default class WordService extends FirebaseService {
  private word: WordModel;

  constructor(word: WordModel) {
    super(word.toString());
    this.word = word;
  }  
  /**
   * Create new word with basic and default parameters
   */
  createWord(): PromiseWord {
    return new Promise((resolve, reject) => {
      this.ref(this.createKey()).set(this.word.dataCreate(), (error) => {
        if (error) {
          resolve({
            ...this.status(true),
            ...this.word.dataCreate(),
          });
        } 
        else {
          reject(this.status(false));
        } 
      });
    });
  }

  /**
   * Returns all the words
   */
  getAllWord(start : string = '' , limit : number = 2) {
    return new Promise((resolve, reject) => {
      this.ref().orderByKey().startAt(start).limitToFirst(limit + 1).once('value', data => {
          let allWords : TWord = <TWord>data.toJSON();
          resolve({
            nextLink : this.word.getLastWordPaginate(allWords),
            ...this.status(true),
            ...this.word.getCurrentsWordsPaginate(allWords,limit),
          });
        },
        error => {
          reject(this.status(false,error.message));
        });
    });
  }

  /**
    * Returns all the data included in this word
    */
  getWordById() {
    return new Promise((resolve,reject) => {
      this.ref(this.word.idword).once('value', data => {
          resolve({
            ...this.status(true),
            ...data.toJSON(),
          });
        },
        error => {
          reject(this.status(false,error.message));
        });
    });
  }

  /**
   * Update the data of one word
   */
  updateWord() {
    return new Promise((resolve,reject) => {
      this.ref(this.word.idword).update(this.word.updateWordData(), error => {
        if (error) {
          resolve(this.status(false,error.message));
        } 
        else {
          reject(this.status(true));
        }
      });
    })
  }

  /**
   * Increase word points when discovered correctly
   */
  incrementPoints() {
    return new Promise((resolve, reject) => {
      this.ref(this.word.idword).child("points").transaction(this.word.incrementPoints, (error,_,snapshot) => {
        if (error) {
          reject(this.status(false,error.message));
        }
        else {
          resolve({
            ...this.status(true),
            ...this.word.getPointsUpdated(snapshot?.val()),
          });
        } 
      });
    });
  }

}
