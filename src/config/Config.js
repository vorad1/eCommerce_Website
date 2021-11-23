import * as firebase from "firebase";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC20B__8Dk8JXoBmV99j48AGJKHrtQR6cE",
  authDomain: "ecommerce-cc5ea.firebaseapp.com",
  projectId: "ecommerce-cc5ea",
  storageBucket: "ecommerce-cc5ea.appspot.com",
  messagingSenderId: "827632597701",
  appId: "1:827632597701:web:a22cfe075b96d695710eac",
  measurementId: "G-G1T2NN6TY5",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
