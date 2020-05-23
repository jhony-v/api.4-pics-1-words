import UserModel, { PropsUser } from "./UserModel";
import FirebaseService from "../../lib/FirebaseService";

type PromiseUser = Promise<PropsUser>;
type userJSON = { [key : string] : PropsUser };

export default class UserService extends FirebaseService {
  private user: UserModel;

  constructor(user: UserModel) {
    super(user.toString());
    this.user = user;
  }

  /**
   * Create new users in the application 
   */
  create(): PromiseUser {
    return new Promise((resolve) => {
      this.ref(this.createKey()).set(this.user.createUserData(), (error) => {
        resolve(this.user.createUserData());
      });
    });
  }
  
  /**
   * Check that the user is registered in the application
   */
  checkIfUserExists(): PromiseUser {
    return new Promise((resolve) => {
        this.ref().orderByChild("username").equalTo(this.user.username).once('value', data => {
            let userData = this.user.existsUser(<userJSON>data.toJSON());
            resolve(userData);
        });
    });
  }

  /**
   * Update the data of the user
   */
  updateUser(): PromiseUser {
    return new Promise((resolve) => {
        resolve({});
    });
  }

  /**
   * Increment the points personal by day
   */
  incrementPointsDiscoverByDay(): PromiseUser {
    return new Promise((resolve) => {
        this.ref(this.user.iduser,'personalPoints').transaction(this.user.increasePoints,error=>{
            resolve({});
        });
    });
  }


}
