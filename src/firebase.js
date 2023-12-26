// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCvyzgpHJoF-CcWzsR12UJWi1gLPWn6UE",
  authDomain: "auth-64082.firebaseapp.com",
  projectId: "auth-64082",
  storageBucket: "auth-64082.appspot.com",
  messagingSenderId: "913849107283",
  appId: "1:913849107283:web:865bd7a29be7c501f917a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
