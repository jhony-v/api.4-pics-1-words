import firebase from "firebase-admin";
import keyCredentials from "../key.json";

interface FirebaseConfiguration {
  credential: firebase.credential.Credential;
  databaseURL: string;
}

const firebaseConfig: FirebaseConfiguration = {
  credential: keyCredentials,
  databaseURL: "https://app-react-fa7da.firebaseio.com",
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default app;
