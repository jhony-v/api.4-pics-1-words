import { IWord } from "../types/IWord";
import  { IActions } from "../types/IAction";
import Model from "./Model";
import { status, createKeyDocument } from "../utils/help";
import { WORD } from "../utils/constants";

class Word extends Model implements IActions<IWord> {

    constructor(database: firebase.database.Database) {
        super(database);
    }


    create = (properties: IWord, request: Function) => {
        const { iduser, letters, images, points } = properties;
        const idword = createKeyDocument(WORD, this.db);
        return this.db.ref(WORD + "/" + idword).set({ iduser, letters, images, points }, error => {
            request(status(error));
        });
    }


    readAll = (request: Function) => {
        return this.db.ref(WORD).once('value').then(data => request(data.toJSON()));
    }


    byId = (idword: string, request: Function) => {
        return this.db.ref(WORD + "/" + idword).on('value', data => request(data.toJSON()));
    }


    incrementPoints = (idword: string, request: Function) => {
        console.log(idword);
        const wordSelected = this.db.ref(WORD + "/" + idword);
        const transaction = wordSelected.child("points").transaction(points => points + 1, error => {
            return request(status(error));
        });
        return transaction;
    }

}


export default Word;