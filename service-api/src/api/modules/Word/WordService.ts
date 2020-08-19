import FirebaseService from "../../../lib/base/FirebaseService";
import WordModel, { PropsWord, TWord } from "./WordModel";
import ResponseJsonHateoas from "../../system/ResponseJsonHateoas";

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
          resolve( ResponseJsonHateoas.send(true,this.word.dataCreate()) );
        } 
        else {
          reject( ResponseJsonHateoas.send(false) );
        } 
      });
    });
  }

  /**
   * Returns all the words
   */
  getAllWord(start : string = '' , limit : number = 3) {
    return new Promise((resolve, reject) => {
      this.ref().orderByKey().startAt(start).limitToFirst(limit + 1).once('value', data => {
          let allWords : TWord = <TWord>data.toJSON();
          let response = ResponseJsonHateoas.send(true,this.word.getCurrentsWordsPaginate(allWords,limit),{
            nextLink : this.word.getLastWordPaginate(allWords)
          });
          resolve(response);
        },
        error => {
          reject( ResponseJsonHateoas.send(false) );
        });
    });
  }

  /**
    * Returns all the data included in this word
    */
  getWordById() {
    return new Promise((resolve,reject) => {
      this.ref(this.word.idword).once('value', data => {
          resolve( ResponseJsonHateoas.send(true,<TWord>data.toJSON()) );
        },
        error => {
          reject( ResponseJsonHateoas.send(false) );
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
          resolve( ResponseJsonHateoas.send(false) );
        } 
        else {
          reject( ResponseJsonHateoas.send(true) );
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
          reject( ResponseJsonHateoas.send(false) );
        }
        else {
          resolve( ResponseJsonHateoas.send(true,this.word.getPointsUpdated(snapshot?.val()) ) );
        } 
      });
    });
  }

}
