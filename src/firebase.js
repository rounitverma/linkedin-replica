import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLPsso8SNAj6aRSfEoYdg2cRJUCLy2xwM",
  authDomain: "linkedin-clone-18c6a.firebaseapp.com",
  projectId: "linkedin-clone-18c6a",
  storageBucket: "linkedin-clone-18c6a.appspot.com",
  messagingSenderId: "426159317490",
  appId: "1:426159317490:web:d71e12bc82902419c4cb6b",
  measurementId: "G-LZ53EESEYY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
