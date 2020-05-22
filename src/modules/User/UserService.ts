import UserModel, { PropsUser } from "./UserModel";
import FirebaseService from "../../lib/FirebaseService";

type PromiseUser = Promise<PropsUser>;

export default class UserService extends FirebaseService {
  private user: UserModel;

  constructor(user: UserModel) {
    super(user.toString());
    this.user = user;
  }

  create(): PromiseUser {
    return new Promise((resolve) => {
      this.ref(this.createKey()).set(this.user.createUserData(), (error) => {
        resolve(this.user.createUserData());
      });
    });
  }

  checkIfUserExists(): PromiseUser {
    type userJSON = { [key : string] : PropsUser };
    return new Promise((resolve) => {
        this.ref().orderByChild("username").equalTo(this.user.username).once('value', data => {
            let userData = this.user.existsUser(<userJSON>data.toJSON());
            resolve(userData);
        });
    });
  }

  updateUser(): PromiseUser {
    return new Promise((resolve) => {
        resolve({});
    });
  }

  incrementPointsDiscoverByDay(): PromiseUser {
    return new Promise((resolve) => {
        this.ref(this.user.iduser,'personalPoints').transaction(this.user.increasePoints,error=>{
            resolve({});
        });
    });
  }


}
