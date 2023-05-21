
import{firebaseApp, auth} from './firebaseInit.js';
import{getAuth, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';


 export function signUp(email, password, auth){

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
// Signed in 
const user = userCredential.user;

// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;

// ..
});
}
