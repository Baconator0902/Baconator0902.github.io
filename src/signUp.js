        import  {createUserWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
        import { set, ref, update } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';
       import {auth, database} from  "/src/firebaseInit.js";

        var submitButton = document.getElementById("submitButton");
        console.log(submitButton);
        function onClickFunction() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password1").value;
            var firstName = document.getElementById("first_name").value;
                
            
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
        // Signed in 
                 var user = userCredential.user;
                 var uid = user.uid;
                console.log(user);
                console.log(firstName);
                set(ref(database, 'users/' + uid),{
                        firstname : firstName,
                    })  .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});
              
               
        // ...
             })
            .catch((error) => {
         const errorCode = error.code;  
        const errorMessage = error.message;
        // ..
             });}
           
        
        submitButton.addEventListener('click', onClickFunction);