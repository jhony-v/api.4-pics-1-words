import * as controller from "../controllers/WordController";
import Route from "./Route";

class Word extends Route {
  constructor() {
    super();
  }

  initialize() {
    this.router.get("/", controller.getAllWords); // get all words
    this.router.get("/:id", controller.getWordById); // get only word
    this.router.post("/", controller.createNewWord); // create new word
    this.router.put("/", controller.updateWord); // update one word
    this.router.post("/increment", controller.incrementPointsWordDiscover); // increment points of word
    return this.start();
  }
}

export default Word;
