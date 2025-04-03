// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVTqHfaCPQLs-RRMKKcLKfadXOEvpRJTc",
  authDomain: "prepswd.firebaseapp.com",
  projectId: "prepswd",
  storageBucket: "prepswd.firebasestorage.app",
  messagingSenderId: "318356453720",
  appId: "1:318356453720:web:0fae16be93f3caf08d0d2d",
  measurementId: "G-32T2X1CWKG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);