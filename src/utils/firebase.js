// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOBpF3hSsL2TEhc5Spz9Mqlpbidabn6xk",
  authDomain: "netflixgpt-c9074.firebaseapp.com",
  projectId: "netflixgpt-c9074",
  storageBucket: "netflixgpt-c9074.appspot.com",
  messagingSenderId: "1093623531048",
  appId: "1:1093623531048:web:5fc8ce67e778b8896a571d",
  measurementId: "G-2YVTQ4R8HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();