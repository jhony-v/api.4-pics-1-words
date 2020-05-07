import firebase from "firebase-admin";
import serviceAccount from "../key.json";

const firebaseConfig: firebase.AppOptions = {
  credential: firebase.credential.cert(<any>serviceAccount),
  databaseURL: "https://app-react-fa7da.firebaseio.com",
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default app;
