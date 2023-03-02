import  { initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {getFirestore, DocumentSnapshot, onSnapshot, doc} from 'firebase/firestore';

var firebaseConfig= {

    apiKey: "AIzaSyB73zBhsvbT4tPeQTXLUKIbhYut_VvRukA",
    authDomain: "tsawebmaster2004901.firebaseapp.com",
    projectId: "tsawebmaster2004901",
    storageBucket: "tsawebmaster2004901.appspot.com",
    messagingSenderId: "845325593057",
    appId: "1:845325593057:web:feadfeeeb7496a7c05caa0",
    measurementId: "G-XSBFCXSCMV"
};
const initializeAppIfNecessary = () => {
    try {
      return getApp()
    } catch {
      return initializeApp(firebaseConfig)
    }
  }
  let app = initializeAppIfNecessary()
 const auth = getAuth(app);
 const db = getFirestore(app);
 const rtdb = firebase.database(app);
 export{app, auth};
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in');

    }else{
        console.log('no user');
        
    }
})

/*document.forms.getElementById("signUp").addEventListener("click", function(){
    var email = document.getElementById("email");
    var password = document.getElementById("password1");
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
        const user = userCredential.user;
        console.log(user);
        alert("Registration Complete");

    }).catch((error) => {
            const ErrorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(error);
    });
});
*/
function register() {
    email = document.getElementById('email').value;
    password = document.getElementById("password1").value;  
    if(validate_email(email)== false || validate_password(password) == false) {
        alert('Bad email or password!')
        return
    }
    auth.createUserWithEmailAndPassword(email, password).
    then(function(){
            var user = auth.currentUser
            alert('User Created')
            var database_ref = rtdb.ref()

            var user_data ={
                email:email,
                last_login: Date.now()
            }
            database_ref.child('users/' + user.uid).set
    }).catch(function(error){
        var error_code = error.code
        var error_message = error.message;
        alert(error_message)
    })

}

function validate_email(email){
   expression = /^[^@]+@\w+(\.\w)+\w$/.test(str);
    if(expression.test(email) == true) {
        return true;

    }
    else{
        return false;
    }
}

function validate_password(password){
     if(password < 6){
        return false;
     }else{
        return true;
     }
}

function validate_field(field){
    if(field == null){
        return false;

    }
    if(field.length <= 0){
        return false;
    }
    else{
        return true;
    }
}

