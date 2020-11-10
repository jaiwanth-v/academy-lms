import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBOgw5nEwU6pXGihiefcIEDLgfhISAtkgo",
  authDomain: "university-lms.firebaseapp.com",
  projectId: "university-lms",
  storageBucket: "university-lms.appspot.com",
  messagingSenderId: "47386621097",
  appId: "1:47386621097:web:398dd017956bc973f7e5b8",
  measurementId: "G-BM7GER01GC",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
