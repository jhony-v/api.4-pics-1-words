import CryptoJs from "crypto-js";
import ModelBase from "../../lib/ModelBase";

export interface PropsIndividualPoints {
  points: number;
  date: string;
}

export interface PropsUser {
  iduser?: string;
  username?: string;
  pass?: string;
  image?: string;
  personalPoints?: [PropsIndividualPoints];
}

export default class UserModel extends ModelBase{
  public name: string = '';
  public iduser : string = '';
  public username : string = '';
  public pass : string = '';
  public image : string = '';
  public props : PropsUser = {};

  constructor() {
    super('user');
  }
  

  createUserData(): PropsUser {
    return {
      username : this.username,
      pass: this.encryptPassword(this.pass),
    };
  }

  updateUserData() : PropsUser {
    const keys = Object.keys(this.props);
    const values = Object.values(this.props);
    return { };
  }

  increasePoints(personalPoints: PropsIndividualPoints[]) : PropsIndividualPoints[] {
    let currentDate = new Date().toLocaleDateString();
    if (personalPoints !== null) {
      personalPoints = personalPoints.map((current) => {
        if (current.date === currentDate) current.points += 1;
        return current;
      });
    }
    return personalPoints;
  }

  existsUser(data : {[key:string]:PropsUser}) : PropsUser {
    let state = { status: false };
    let user: PropsUser = {};
    for (let i in data) {
        let { username , pass } : PropsUser = data[i];
        if (this.verifyUser({username,pass})) {
            state.status = true;
            user = { ...data[i], iduser: i };
            break;
        }
    }
    return user;
  }


  verifyUser(props : PropsUser) : boolean {
    return props.username === this.username && props.pass === this.encryptPassword(this.pass);
  }

  encryptPassword(password: string = ""): string {
    return CryptoJs.SHA256(password).toString();
  }

  toString(): string {
    return this.name;
  }

}
