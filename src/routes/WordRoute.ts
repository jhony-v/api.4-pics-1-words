import WordController from "../controllers/WordController";
import Route from "./Route";

export default class WordRoute extends Route<WordController> {
  constructor() {
    super(new WordController());
  }

  public initialize() {
    this.router.get("/", this.controller.getAllWords); // get all words
    this.router.post("/", this.controller.createNewWord); // create new word
    this.router.get("/:id", this.controller.getWordById); // get only word
    this.router.put("/:id", this.controller.updateWord); // update one word
    this.router.post("/id:/points/increment", this.controller.incrementPointsWordDiscover); // increment points of word
    return this.start();
  }
}
