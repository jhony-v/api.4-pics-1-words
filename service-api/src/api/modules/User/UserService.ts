import UserModel, { PropsUser } from "./UserModel";
import FirebaseService from "../../../lib/base/FirebaseService";
import ValidatorObject from "../../system/ValidatorObject";
import ResponseJsonHateoas from "../../system/ResponseJsonHateoas";

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
    return new Promise((resolve,reject) => {
      this.ref(this.createKey()).set(this.user.createUserData(), (error) => {
        if (error) {
          resolve( ResponseJsonHateoas.send(true,this.user.createUserData()) );
        }
        else {
          reject( ResponseJsonHateoas.send(false) );
        }
      });
    });
  }
  
  /**
   * Check that the user is registered in the application
   */
  checkIfUserExists(): PromiseUser {
    return new Promise((resolve,reject) => {
        this.ref().orderByChild("username").equalTo(this.user.username).once('value', data => {
            let userData = this.user.existsUser(<userJSON>data.toJSON());
            let status = !ValidatorObject.empty(userData);
            let response = ResponseJsonHateoas.send(status,userData);
            resolve( response );
        },
        error => {
          reject( ResponseJsonHateoas.send(false) );
        });
    });
  }

  /**
   * Update the data of the user
   */
  updateUser(): PromiseUser {
    return new Promise((resolve,reject) => {
        this.ref(this.user.iduser).update(this.user.updateUserData(), error => {
          if (error) {
            resolve( ResponseJsonHateoas.send(true,this.user.updateUserData()) );
          }
          else {
            reject( ResponseJsonHateoas.send(false) );
          }
        });
    });
  }

  /**
   * Increment the points personal by day
   */
  incrementPointsDiscoverByDay(): PromiseUser {
    return new Promise((resolve,reject) => {
        this.ref(this.user.iduser,'personalPoints').transaction(this.user.increasePoints, (error,_,snaphsot) => {
          if (error) {
            reject();
          } 
          else {
            resolve( ResponseJsonHateoas.send(true,snaphsot?.val()) );
          } 
        });
    });
  }

}
