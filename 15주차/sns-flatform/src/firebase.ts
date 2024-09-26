import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBccMJ5jdZqpDKl-yzdBof0It8AD47WE0",
  authDomain: "sns-flatform01.firebaseapp.com",
  projectId: "sns-flatform01",
  storageBucket: "sns-flatform01.appspot.com",
  messagingSenderId: "1054215415363",
  appId: "1:1054215415363:web:5a63e091984d5eedd496f6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
