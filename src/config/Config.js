import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC20B__8Dk8JXoBmV99j48AGJKHrtQR6cE",
  authDomain: "ecommerce-cc5ea.firebaseapp.com",
  projectId: "ecommerce-cc5ea",
  storageBucket: "ecommerce-cc5ea.appspot.com",
  messagingSenderId: "827632597701",
  appId: "1:827632597701:web:f05b7f718747a810710eac",
  measurementId: "G-YX6JZHZTWV"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };

