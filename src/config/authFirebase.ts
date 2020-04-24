import firebase from "firebase"

const firebaseConfig: Object = {
  apiKey: "AIzaSyCJC3_FLGHHbm2UV6hYABYBdzhB4a-D3Cs",
  authDomain: "app-react-fa7da.firebaseapp.com",
  databaseURL: "https://app-react-fa7da.firebaseio.com",
  projectId: "app-react-fa7da",
  storageBucket: "app-react-fa7da.appspot.com",
  messagingSenderId: "830878587924",
  appId: "1:830878587924:web:3e5fc741102222252a5b01",
  measurementId: "G-KZZ1C56TYV"
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default app;