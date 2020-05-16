import firebase from "firebase-admin";
import serviceAccount from "../key.json";
import env from "./env";

const firebaseConfig: firebase.AppOptions = {
  credential: firebase.credential.cert(<any>serviceAccount),
  databaseURL: env.FIREBASE_URL,
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default app;
