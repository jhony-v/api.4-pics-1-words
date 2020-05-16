import firebase from "firebase-admin";
import serviceAccount from "../key.json";
import env from "./env";

export type FireDataBase = firebase.database.Database;

export interface IPagination {
  start?: number;
  limit?: number;
  end?: number;
}

export interface IStatus {
  status: boolean;
}

const firebaseConfig: firebase.AppOptions = {
  credential: firebase.credential.cert(<any>serviceAccount),
  databaseURL: env.FIREBASE_URL,
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default app;
