
import{firebaseApp, auth} from '/src/signuplogintest.js';
import{getAuth, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
console.log(firebaseApp);
console.log(auth);

 function signUp(){
    console.log("maybe");
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
print(errorMessage);
// ..
});
}
