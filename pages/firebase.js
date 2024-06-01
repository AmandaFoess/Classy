// firebase.js
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRqQMkg_6R_PUKYRGqkD4TxN_svAyl57M",
  authDomain: "classy-433d8.firebaseapp.com",
  databaseURL: "https://classy-433d8.firebaseio.com",
  projectId: "classy-433d8",
  storageBucket: "classy-433d8.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:294539769520:ios:f91dcb8f1e07663565ed75",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth, database };
