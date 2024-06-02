// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRqQMkg_6R_PUKYRGqkD4TxN_svAyl57M",
  authDomain: "classy-433d8.firebaseapp.com",
  databaseURL: "https://classy-433d8.firebaseio.com",
  projectId: "classy-433d8",
  storageBucket: "classy-433d8.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:294539769520:ios:f91dcb8f1e07663565ed75",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
