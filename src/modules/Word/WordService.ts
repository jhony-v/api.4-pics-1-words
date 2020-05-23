import FirebaseService from "../../lib/FirebaseService";
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
  create(): PromiseWord {
    return new Promise((resolve, reject) => {
      this.ref(this.createKey()).set(this.word.dataCreate(), (error) => {
        resolve(this.word.dataCreate());
      });
    });
  }

  /**
   * Returns all the words
   */
  getAllWord() {
    return new Promise((resolve, reject) => {
      this.ref().orderByChild("letters").startAt(0).limitToFirst(10).once("value", (data) => {
          resolve(data.toJSON());
        });
    });
  }

  /**
    * Returns all the data included in this word
    */
  getWordById() {
    return new Promise((resolve,reject) => {
      this.ref(this.word.idword).once('value',data => {
        resolve(data.toJSON());
      });
    });
  }

  /**
   * Update the data of one word
   */
  updateWord() {
    const { idword , ...restProps } = this.word.props;
    const propsToUpdate : {[key:string] : any} = restProps;
    const ref = this.ref;

    return new Promise((resolve,reject) => {
      async function run(){
        for ( let key in propsToUpdate ) {
          await ref(idword || '').child(key).set(propsToUpdate[key]);
        }
      }
      resolve(run());
    })
  }

  /**
   * Increase word points when discovered correctly
   */
  incrementPoints() {
    return new Promise((resolve, reject) => {
      this.ref(this.word.idword).child("points").transaction(this.word.incrementPoints, (error) => {
          resolve({});
        });
    });
  }
}
