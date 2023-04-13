
import{auth, database} from '/src/firebaseInit.js';
import{signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import{ set, ref } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

    var loginButton =  document.getElementById("loginButton");
    console.log(loginButton);
    var submitButton =  document.getElementById("submitButton");
    console.log(submitButton);
    
   

function onClickFunction(){
    var signUpEmail = document.getElementById("email").value;
    
    var signUpPassword = document.getElementById("password1").value;

    var signUpPassword2 = document.getElementById("password2").value;
    if(signUpPassword2 == signUpPassword){
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        onAuthStateChanged(auth, (user) => {
        
            if (user) {
                var firstName = document.getElementById("first_name").value;
                var uid = user.uid;
                set(ref(database, 'users/' + uid),{
                    firstname: firstName,
                  //  bookedTripDate: "N/A",
                   // partySize: "N/A",
                    //cost: "N/A",
                    
                })
                .then(()=>{       window.location.replace("./index.html");});
        
            } else {
            
            }
    });

     })
    .catch((error) => {
 const errorCode = error.code;  
const errorMessage = error.message;
// ..
     });}
     else{
        window.alert("Passwords do not match!");
     }
    }


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
          window.location.replace("./index.html");
          

    
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
