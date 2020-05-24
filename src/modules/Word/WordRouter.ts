import WordController from "./WordController";
import Route from "../../lib/RouteBase";

export default class WordRouter extends Route<WordController> {
  constructor() {
    super(new WordController());
  }

  public initialize() {
    this.router.get("/", this.controller.getAllWords); // get all words
    this.router.post("/", this.controller.createNewWord); // create new word
    this.router.get("/:id", this.controller.getWordById); // get only word
    this.router.put("/:id", this.controller.updateWord); // update one word
    this.router.post("/:id/points/increment", this.controller.incrementPointsWordDiscover); // increment points of word
    return this.start();
  }
}
