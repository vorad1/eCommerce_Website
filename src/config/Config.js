import { initializeApp, getApps } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyC20B__8Dk8JXoBmV99j48AGJKHrtQR6cE",
  authDomain: "ecommerce-cc5ea.firebaseapp.com",
  projectId: "ecommerce-cc5ea",
};

const firebaseApp = getApps().length === 1 ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const fs = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {auth,fs,storage,signInWithEmailAndPassword}

