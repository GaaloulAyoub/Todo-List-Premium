// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgVqVwrs6Wmy15OqDncAS7VzfYXfIFRNw",
  authDomain: "premier-projet-217b2.firebaseapp.com",
  projectId: "premier-projet-217b2",
  storageBucket: "premier-projet-217b2.appspot.com",
  messagingSenderId: "153947102178",
  appId: "1:153947102178:web:9a0d750cebe0ab424777bb",
  measurementId: "G-DHJ6TLJCHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);