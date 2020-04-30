import { IWord } from "../types/IWord";
import  { IActions } from "../types/IAction";
import Model from "./Model";
import { status, createKeyDocument } from "../utils/helpers";

class Word extends Model implements IActions<IWord> {
    constructor() {
        super("word");
    }


    /**
     * Create new word with basic and default parameters
     * @param properties get properties of user (iduser, letters, images, points)
     */
    create = (properties: IWord, request: Function) => {
        const { iduser, letters, images, points , dateCreated } = properties;
        const idword = createKeyDocument(this.name, this.db);
        return this.db.ref(this.name + "/" + idword).set({ iduser, letters, images, points , dateCreated }, error => {
            request(status(error));
        });
    }


    /**
     * Returns all the words
     * @param request callback to get the response
     */
    readAll = (request: Function) => {
        return this.db.ref(this.name).once('value').then(data => request(data.toJSON()));
    }


    /**
     * Returns all the data included in this word
     * @param idword id of word
     * @param request callback to get the response
     */
    byId = (idword: string, request: Function) => {
        return this.db.ref(this.name + "/" + idword).on('value', data => request(data.toJSON()));
    }


    /**
     * Increase word points when discovered correctly
     * @param idword 
     * @param request callback to get the response
     */
    incrementPoints = (idword: string, request: Function) => {
        const wordSelected = this.db.ref(this.name + "/" + idword);
        const transaction = wordSelected.child("points").transaction(points => points + 1, error => {
            return request(status(error));
        });
        return transaction;
    }

}


export default Word;