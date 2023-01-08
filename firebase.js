// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgU_i_3Yu41_qB-d9IaVRtFTzbUSORHZE",
  authDomain: "better-servus.firebaseapp.com",
  projectId: "better-servus",
  storageBucket: "better-servus.appspot.com",
  messagingSenderId: "1050829609877",
  appId: "1:1050829609877:web:4204300d42c0c260b8349c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
