
        import{auth, database} from '/src/signuplogintest.js';
        import{createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
        import{set, ref} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';
        var submitButton = document.getElementById("submitButton");
        console.log(submitButton);
        var auth2 = auth;
        function onClickFunction() {

            var email = document.getElementById("email").value;
            var password = document.getElementById("password1").value;
            console.log(email);
            console.log(auth2);
            console.log(database);
           createUserWithEmailAndPassword(auth2, email, password)
            .then((userCredential) => {
    // Signed in 
            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid),{
                email: email,
            });
            window.location.replace("http://127.0.0.1:5500/index.html");
            
    // ...
         })
        .catch((error) => {
     const errorCode = error.code;
    const errorMessage = error.message;
    // ..
         });
        }
        submitButton.addEventListener('click', onClickFunction);