import firebase from "firebase-admin";
import serviceAccount from "../key.json";
import env from "../config/env";

export type FireDataBase = firebase.database.Database;

export interface IStatus {
  status: boolean;
}

export default class FirebaseBase {
  constructor() {}

  configurationApp(): firebase.AppOptions {
    return {
      credential: firebase.credential.cert(<any>serviceAccount),
      databaseURL: env.FIREBASE_URL,
    };
  }

  app() : firebase.app.App {
    return firebase.initializeApp(this.configurationApp());
  }
}
