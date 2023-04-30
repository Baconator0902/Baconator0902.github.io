
import{auth} from './firebaseInit.js';
import{signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';


    var loginButton =  document.getElementById("loginButton");
    console.log(loginButton);
    

function onClickFunction2() {

    var email = document.getElementById("username2").value;
    
    var password = document.getElementById("password3").value;
    console.log(email);
    console.log(auth);
   signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
// Signed in 
    var user = userCredential.user;
    console.log(user);
   window.location.replace("./index.html");
// ...
 })
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
 });
}
loginButton.addEventListener('click', onClickFunction2);