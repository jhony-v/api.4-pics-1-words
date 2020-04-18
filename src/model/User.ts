import { IUser, IActions, IStatus } from "../utils/types";
import { USER } from "../utils/constants";
import { status, createKeyDocument } from "../utils/help";
import Model from "./Model";
import CryptoJs from "crypto-js";


class User extends Model implements IActions<IUser> {

    constructor(database: firebase.database.Database) {
        super(database);
    }


    readAll = (request: Function) => {
        return [{}];
    }


    create = (properties: IUser, request: Function) => {
        const { username, pass } = properties;
        const iduser = createKeyDocument(USER, this.db);
        const propertiesUserCreate: IUser = {
            username,
            pass: this.encryptPassword(pass)
        };
        return this.db.ref(USER + "/" + iduser).set(propertiesUserCreate, error => {
            request(status(error));
        });
    }


    checkIfExistUser = (properties: IUser, request: Function) => {
        const { username, pass } = properties;
        let state: IStatus = { status: false };
        let user: IUser;
        let checkUser: IUser;
        let data: { [key: string]: IUser };
        return this.db.ref(USER).orderByChild("username").equalTo(<string>username).on('value', value => {
            data = <{ [key: string]: IUser }>value.toJSON();
            for (let i in data) {
                checkUser = data[i];
                if (checkUser.username === username && checkUser.pass === (pass)) {
                    state.status = true;
                    user = { ...data[i], iduser: i };
                    break;
                }
            }
            request({ ...state, ...user });
        });
    }


    encryptPassword = (password: string = ""): string => {
        return CryptoJs.SHA256(password).toString();
    }


}

export default User;