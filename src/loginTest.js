
import{auth} from '/src/signuplogintest.js';
import{signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';


    var loginButton =  document.getElementById("loginButton");
    console.log(loginButton);
    var auth2 = auth;


function onClickFunction2() {

    var email = document.getElementById("username2").value;
    
    var password = document.getElementById("password3").value;
    console.log(email);
    console.log(auth2);
   signInWithEmailAndPassword(auth2, email, password)
    .then((userCredential) => {
// Signed in 
    var user = userCredential.user;
    console.log(user);
   // window.location.replace("http://127.0.0.1:5500/index.html");
// ...
 })
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
 });
}
loginButton.addEventListener('click', onClickFunction2);