abstract class Model {
    protected db: firebase.database.Database;
    constructor(database: firebase.database.Database) {
        this.db = database;
    }
}

export default Model;