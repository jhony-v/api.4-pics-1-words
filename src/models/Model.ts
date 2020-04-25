import { FireDataBase } from "../types/IFirebase";

abstract class Model {
    
    protected db: FireDataBase;
    protected name: string;

    constructor(database: FireDataBase, modelName : string) {
        this.db = database;
        this.name = modelName;
    }
}

export default Model;