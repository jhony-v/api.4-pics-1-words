import Model from "./Model";
import CryptoJs from "crypto-js";
import { IStatus } from "../types/IStatus";
import { IUser , IActions } from "../types/IModel";
import { status, createKeyDocument } from "../utils/helpers";

class User extends Model implements IActions<IUser> {
    constructor() {
        super("user");
    }

    readAll = (request: Function) => {
        return [{}];
    }


    /**
     * Create new users in the application 
     * @param properties properties of user to create
     * @param request callback to get the response
     */
    create = (properties: IUser, request: Function) => {
        const { username, pass } = properties;
        const iduser = createKeyDocument(this.name, this.db);

        const propertiesUserCreate: IUser = {
            username,
            pass: this.encryptPassword(pass)
        };
        return this.db.ref(this.name + "/" + iduser).set(propertiesUserCreate, error => {
            request(status(error));
        });
    }


    /**
     * Check that the user is registered in the application
     * @param properties properties to check if exists the user ( username , password )
     * @param request callback to get the response
     */
    checkIfExistUser = (properties: IUser, request: Function) => {
        const { username, pass } = properties;
        let state: IStatus = { status: false };
        let user: IUser;
        let checkUser: IUser;
        let data: { [key: string]: IUser };
        return this.db.ref(this.name).orderByChild("username").equalTo(<string>username).on('value', value => {
            data = <{ [key: string]: IUser }>value.toJSON();
            for (let i in data) {
                checkUser = data[i];
                if (checkUser.username === username && checkUser.pass === this.encryptPassword(pass)) {
                    state.status = true;
                    user = { ...data[i], iduser: i };
                    break;
                }
            }
            request({ ...state, ...user });
        });
    }


    /**
     * Encrypt the password of user 
     * @param password text password of user 
     */
    encryptPassword = (password: string = ""): string => {
        return CryptoJs.SHA256(password).toString();
    }


    /**
     * update the username
     * @param iduser id of username
     * @param username new username
     */
    updateUsername = ( { iduser , username } : IUser, request : Function) => {
        return this.db.ref(this.name + "/" + iduser).child('username').set(username,error => {
            request(status(error));
        })
    }

}

export default User;