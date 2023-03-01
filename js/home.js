// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs3WRcwB37wR-iRxeUIgzQewUokRWdSZQ",
  authDomain: "website-7e63b.firebaseapp.com",
  databaseURL: "https://website-7e63b-default-rtdb.firebaseio.com",
  projectId: "website-7e63b",
  storageBucket: "website-7e63b.appspot.com",
  messagingSenderId: "874042816447",
  appId: "1:874042816447:web:74154ead9395c43f35130a",
  measurementId: "G-L6B4CBHE4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);