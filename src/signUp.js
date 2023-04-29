        import  {createUserWithEmailAndPassword, onAuthStateChanged, set, ref } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
       import {auth} from  "./firebaseInit.js";

        var submitButton = document.getElementById("submitButton");
        console.log(submitButton);
        function onClickFunction() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password1").value;
            console.log(email);
            console.log(auth2);
            console.log(database);

                
                 createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
        // Signed in 
                 var user = userCredential.user;
                console.log(user);
                set(ref(database, 'users/' + user.uid),{
                    email: email,
                });
                onAuthStateChanged(auth, (user) => {
                        if (user) {
                          // User is signed in, see docs for a list of available properties
                          // https://firebase.google.com/docs/reference/js/firebase.User
                          window.location.replace("./index.html");
                          
                
                          // ...
                        } else {
                          // User is signed out
                          // ...
                        }
                });
               
        // ...
             })
            .catch((error) => {
         const errorCode = error.code;  
        const errorMessage = error.message;
        // ..
             });}
           
        
        submitButton.addEventListener('click', onClickFunction);