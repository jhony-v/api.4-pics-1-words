import UserController from "../controllers/UserController";
import Route from "./Route";

export default class UserRoute extends Route<UserController> {
  constructor() {
    super(new UserController());
  }

  public initialize() {
    this.router.post("/", this.controller.createUser); // create user
    this.router.put(":id/", this.controller.updateUser); // update user
    this.router.put(":id/points/increment", this.controller.incrementPointsDiscoverByDay); // increment points individual per day
    this.router.post(":id/exists", this.controller.checkIfExists); // check if the user exists
    return this.start();
  }
}
