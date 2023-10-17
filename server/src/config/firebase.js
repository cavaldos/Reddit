// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBABBiGYfcvcBctAkX2elDpk6TjjPxfIaQ",
  authDomain: "reddit-d54f3.firebaseapp.com",
  projectId: "reddit-d54f3",
  storageBucket: "reddit-d54f3.appspot.com",
  messagingSenderId: "224662782776",
  appId: "1:224662782776:web:11e05bc2c761d9fce337cd",
  measurementId: "G-PHQKJTWY7J",
};

// Initialize Firebase
export const appauth = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
