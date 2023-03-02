import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import{getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
//import {} from 'firebase/firestore';

 const firebaseApp = initializeApp({
    apiKey: "AIzaSyCLuVhLzDeQnta9lgl0m1yYgowupdwVTJI",
    authDomain: "webmaster-2004-901.firebaseapp.com",
    projectId: "webmaster-2004-901",
    storageBucket: "webmaster-2004-901.appspot.com",
    messagingSenderId: "1021143887374",
    appId: "1:1021143887374:web:6ed7a05e4b879e3e04565f",
    measurementId: "G-E24BYQ72TT"
});
 export const auth = getAuth(firebaseApp);


onAuthStateChanged(auth, user => {
        if(user != null){
            console.log("Logged in");
        }else{
            console.log("No active user");
        }
});



