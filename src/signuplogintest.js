import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import{getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCLuVhLzDeQnta9lgl0m1yYgowupdwVTJI",
    authDomain: "webmaster-2004-901.firebaseapp.com",
    databaseURL: "https://webmaster-2004-901-default-rtdb.firebaseio.com",
    projectId: "webmaster-2004-901",
    storageBucket: "webmaster-2004-901.appspot.com",
    messagingSenderId: "1021143887374",
    appId: "1:1021143887374:web:6ed7a05e4b879e3e04565f",
    measurementId: "G-E24BYQ72TT"
});
export const auth = getAuth(firebaseApp);

 /* function signUp(){
    
     var email = document.getElementById("email");
     var password = document.getElementById("password1");
     createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
 // Signed in 
 const user = userCredential.user;
 console.log(user);
 // ...
})
.catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
 // ..
});
 }
 */

