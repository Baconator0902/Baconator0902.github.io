
import{auth} from '/src/firebaseInit.js';
import{signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';


    var loginButton =  document.getElementById("loginButton");
    console.log(loginButton);
    var submitButton =  document.getElementById("submitButton");
    console.log(submitButton);
   

function onClickFunction(){
    var signUpEmail = document.getElementById("email").value;
    
    var signUpPassword = document.getElementById("password1").value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              window.location.replace("http://127.0.0.1:5500/index.html");
              
    
        
            } else {
            
            }
    });

     })
    .catch((error) => {
 const errorCode = error.code;  
const errorMessage = error.message;
// ..
     });}


function onClickFunction2() {

    var email = document.getElementById("username2").value;
    
    var password = document.getElementById("password3").value;
    console.log(email);
   signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
// Signed in 
    var user = userCredential.user;
    console.log(user);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          window.location.replace("http://127.0.0.1:5500/index.html");
          

    
        } else {
        
        }
});

 })
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
 });
}
loginButton.addEventListener('click', onClickFunction2);
submitButton.addEventListener('click', onClickFunction);