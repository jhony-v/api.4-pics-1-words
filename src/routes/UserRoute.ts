import UserController from "../controllers/UserController";
import Route from "./Route";

export default class UserRoute extends Route<UserController> {
  constructor() {
    super(new UserController());
  }

  public initialize() {
    this.router.post("/", this.controller.createUser); // create user
    this.router.post("/exists", this.controller.checkIfExists); // check if the user exists
    this.router.put("/", this.controller.updateUsername); // update username
    return this.start();
  }
}
