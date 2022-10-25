// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBox5PTV45rf4Zo1peggf3387Ey-0woqW4",
  authDomain: "filipini-6846e.firebaseapp.com",
  projectId: "filipini-6846e",
  storageBucket: "filipini-6846e.appspot.com",
  messagingSenderId: "523192036485",
  appId: "1:523192036485:web:a2eda21a5d9612c8770dec",
  measurementId: "G-638BEKPDYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
