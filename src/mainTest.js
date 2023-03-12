        import { signUp } from "/src/index.js";
        import{auth} from '/src/signuplogintest.js';
        var submitButton = document.getElementById("submitButton");
        console.log(submitButton);
        function onClickFunction() {

            var email = document.getElementById("email").value;
            console.log(email);
          
        
        //function(email, password, goodAuth){
           // signUp();
     //   };
        }
        submitButton.addEventListener('click', onClickFunction);