import{auth,} from '/src/firebaseInit.js';
import{signOut, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';


var signOutButton =  document.getElementById("signOutButton");
function signOutOnClick(){
    signOut(auth).then(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
             
              
    
        
            } else {
                window.location.replace("./index.html");
            }
    });
      }).catch((error) => {
        // An error happened.
      });
}
signOutButton.addEventListener('click', signOutOnClick);