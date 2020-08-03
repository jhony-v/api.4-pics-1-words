import firebase from "firebase-admin";
import serviceAccount from "../key.json";
import env from "./env";

export type FireDataBase = firebase.database.Database;

// configuration of options to connect to database
export const appConfig: firebase.AppOptions = {
  credential: firebase.credential.cert(<any>serviceAccount),
  databaseURL: env.FIREBASE_URL,
};

export const app = firebase.initializeApp(appConfig);

// use database service
export const database = app.database();
