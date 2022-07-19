// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
"put your api data ymanyak"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
