// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxGGTxnh_UmpTiXK3PzL-Rg1lTyEq9DSU",

  authDomain: "xboost-1c6b3.firebaseapp.com",

  projectId: "xboost-1c6b3",

  storageBucket: "xboost-1c6b3.appspot.com",

  messagingSenderId: "50169570030",

  appId: "1:50169570030:web:d3ff7d58d67d29e15e89ff",

  measurementId: "G-N6JHQ3WE25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
