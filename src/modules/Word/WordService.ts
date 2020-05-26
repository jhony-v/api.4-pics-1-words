import FirebaseService from "../../lib/base/FirebaseService";
import WordModel, { PropsWord } from "./WordModel";

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
          resolve(this.word.dataCreate());
        } 
        else {
          reject({});
        } 
      });
    });
  }

  /**
   * Returns all the words
   */
  getAllWord() {
    return new Promise((resolve, reject) => {
      this.ref().orderByChild("letters").startAt(0).limitToFirst(10).once('value', 
        data => {
          resolve(data.toJSON());
        },
        error => {
          reject(error);
        });
    });
  }

  /**
    * Returns all the data included in this word
    */
  getWordById() {
    return new Promise((resolve,reject) => {
      this.ref(this.word.idword).once('value',
        data => {
          resolve(data.toJSON());
        },
        error => {
          reject(error);
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
          resolve({});
        } 
        else {
          reject({});
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
          reject(error);
        }
        else {
          resolve( this.word.getPointsUpdated(snapshot?.val()) );
        } 
      });
    });
  }

}
