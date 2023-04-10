import{ onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import{auth} from '/src/firebaseInit.js';

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      var signInButton = $("#navBar").children().children().last().children();
          $(signInButton).text("Profile");
          $(signInButton).attr("href", "profile.html");
     


    } else {
    var signInButton = $("#navBar").children().children().last().children();
      $(signInButton).text("Sign up/Log in");
        $(signInButton).attr("href", "signUpLogin.html");
    }
});
