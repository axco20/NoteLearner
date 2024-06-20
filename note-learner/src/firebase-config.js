// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW7SpubFU2u7VjQCN6vtb7D1cLn-NhMmA",
  authDomain: "notelearner-78dc2.firebaseapp.com",
  projectId: "notelearner-78dc2",
  storageBucket: "notelearner-78dc2.appspot.com",
  messagingSenderId: "831152344131",
  appId: "1:831152344131:web:81958f52198c28fd8d18f6",
  measurementId: "G-4F6EZLDDSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {analytics}