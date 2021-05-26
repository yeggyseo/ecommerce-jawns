import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7b4v0qAMvlbd8cu2sze44aBs0wePhyww",
  authDomain: "ecommerce-jawns.firebaseapp.com",
  projectId: "ecommerce-jawns",
  storageBucket: "ecommerce-jawns.appspot.com",
  messagingSenderId: "116086713748",
  appId: "1:116086713748:web:a452a19b9fd16e415b3381",
  measurementId: "G-ZHL6THB8DX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
