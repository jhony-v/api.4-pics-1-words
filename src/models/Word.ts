import { IWord } from "../types/IWord";
import  { IActions } from "../types/IAction";
import Model from "./Model";
import { status, createKeyDocument } from "../utils/help";
import { FireDataBase } from "../types/IFirebase";

class Word extends Model implements IActions<IWord> {

    constructor(database: FireDataBase) {
        super(database,"word");
    }


    create = (properties: IWord, request: Function) => {
        const { iduser, letters, images, points } = properties;
        const idword = createKeyDocument(this.name, this.db);
        return this.db.ref(this.name + "/" + idword).set({ iduser, letters, images, points }, error => {
            request(status(error));
        });
    }


    readAll = (request: Function) => {
        return this.db.ref(this.name).once('value').then(data => request(data.toJSON()));
    }


    byId = (idword: string, request: Function) => {
        return this.db.ref(this.name + "/" + idword).on('value', data => request(data.toJSON()));
    }


    incrementPoints = (idword: string, request: Function) => {
        const wordSelected = this.db.ref(this.name + "/" + idword);
        const transaction = wordSelected.child("points").transaction(points => points + 1, error => {
            return request(status(error));
        });
        return transaction;
    }

}


export default Word;