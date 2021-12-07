import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_APP_API_KEY,
  authDomain: NEXT_PUBLIC_APP_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_APP_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_APP_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_APP_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_APP_APP_ID,
  measurementId: NEXT_PUBLIC_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };

