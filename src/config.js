import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB-g-WsNt_2wbVj0u1XArU8B8miAftMlu4",
  authDomain: "wiping-as-intended-setup.firebaseapp.com",
  databaseURL: "https://wiping-as-intended-setup.firebaseio.com",
  projectId: "wiping-as-intended-setup",
  storageBucket: "wiping-as-intended-setup.appspot.com",
  messagingSenderId: "612291097796",
  appId: "1:612291097796:web:51399a572a3e383e"
};

firebase.initializeApp(config);

export default firebase;
