import * as controller from "../controllers/user.controller";
import Route from "./Route";

class User extends Route{
  constructor() {
    super();
  }

  initialize() {
    this.router.post("/", controller.createUser); // create user
    this.router.post("/exists", controller.checkIfExists); // check if the user exists
    this.router.put("/", controller.updateUsername); // update username
    return this.start();
  }
}

export default User;
