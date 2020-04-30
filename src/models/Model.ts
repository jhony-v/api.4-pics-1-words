import { FireDataBase } from "../types/IFirebase";
import firebase from "../config/firebase";

abstract class Model {
    protected db: FireDataBase;
    protected name: string;

    constructor(modelName : string) {
        this.db = firebase.database();
        this.name = modelName;
    }
}

export default Model;