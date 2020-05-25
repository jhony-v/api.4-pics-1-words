import firebase from "firebase-admin";
import serviceAccount from "../key.json";
import env from "../config/env";

export type FireDataBase = firebase.database.Database;

export const appConfig: firebase.AppOptions = {
  credential: firebase.credential.cert(<any>serviceAccount),
  databaseURL: env.FIREBASE_URL,
};

export const app = firebase.initializeApp(appConfig);

export const database = app.database();
