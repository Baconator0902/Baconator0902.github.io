<?php require("register.class.php") ?>
<?php 
if(isset($_POST['Submit'])){
    $user = new RegisterUser($_POST['username'], $_POST['password']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" media="screen and (max-width: 1200px)" href="css/phone.css">
    <link rel="stylesheet" media="screen and (min-width: 1200px)" href="css/main.css">
    <script src="js/navbar.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;600&display=swap" rel="stylesheet"> 
    <script src="js/signUpLogin.js"></script>
    <title>login/signup</title>

    <style>

        * {
            font-family: 'Teko', sans-serif;
            color: black;
        }

        form {
            padding: 0;
        }

        main {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        #logInButtons {
            position: relative;
            width: 100%;
        }

        #logInButtons > * {
            width: 100%;
        }

        #signUpDiv {
            padding: 0;
        }

        #leftTableImage {
            grid-column: 1;
        }

        #rightTable {
            grid-column: 2;
            padding: 0;
        }

        label {
            position: absolute;
        }

        input {
            position: relative;
            margin-left: 15vw;
            width: 25vw;
        }

        h2, label {
            color: rgb(170, 86, 23);
        }

        span {
            display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  word-wrap: break-word;
        }
    </style>
</head>
<body>
    <div id="navBackground">
        
        <nav id="navBar">
            <ul>
                <img src="/images/TotheStarsHomeLogo.svg" style="height: 10vh; padding: 0; top: 0; cursor: pointer;" onclick="MovetoIndex()">
                    
                <li>
                    <a href="info.html">Travel Requirements</a>
                </li>
                <li>
                    <a href="book.html">Book</a>
                </li>
                <li>
                    <a href="safety.html">Safety</a>
                </li>
                <li>
                    <a href="planTrip.html">Plan a trip</a>
                </li>
                <li>
                    <a href="signUpLogin.html">Sign up/Log in</a>
                </li>
            </ul>
           </nav>
        </div>

<main style="background-color: #FFF1E7;">
    <img src="images/AstronautSignUpandLoginGraphic.svg" id="leftTableImage">

    <div id="rightTable">
        
        <div class="hiddenDropdown" id="signUpDiv">
            
            <form  action = "" method = "post" enctype = "multipart/form-data" autocomplete = "off">
                <h2>Sign Up</h2>
                <label for="first_name">First name*</label>
                <input type="text" id="first_name" name="first_name" placeholder="John" required pattern="[A-Z][a-z]*">
                <br>
                <label for="last_name">Last name*</label>
                <input type="text" id="last_name" name="last_name" placeholder="Doe" required pattern="[A-Z][a-z]*">
                <br>
                <label for="age">Birth date*</label>
                <input type="text" id="age" name="age" required placeholder="MM/DD/YYYY" onfocus="(this.type='date')">
                <br>
                <label for="Email">Email*</label>
                <input type="text" id="Email" name="Email" placeholder="tothe.stars@gmail.com" required>
                <br>
                <label for="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="191-123-456-7890">
                <br>
                <label for="username">Username*</label>
                <input type="text" id="username" name="username" placeholder="JohnToTheStars09" required pattern="\S{5,}">
                <br>
                <label for="password1">password*</label>
                <input type="password" id="password1" name="password1" required pattern="\S{8,}" placeholder="">
                <br>
                <label for="password2">confirm password*</label>
                <input type="password" id="password2" name="password2" required pattern="\S{8,}" placeholder="">
                <br>
                <span>

                    <p style="color: rgb(170, 86, 23); padding: 0; width: 80%;">I have read and agree to the <a href="/pdfs/TermsandConditions.pdf">terms and conditions*</a></p>
                
                    <input type="checkbox" id="termsAndConditions" style="padding: 0; margin: 0; position: relative; vertical-align:middle; width:fit-content" name="termsAndConditions" required> 
                </span>
                <input type="submit">
                <p class = "success"><?php echo @$user->error ?></p>
                <p class = "error"><?php echo @$user->success ?></p>
            </form>
            
        </div>

        <div class="hiddenDropdown" id="logInDiv" style="display: none;">
            
            <form>
                <h2>Log In</h2>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="JohnToTheStars09" required pattern="\S{5,}">
                <br>
                <label for="password1">password:</label>
                <input type="password" id="password1" name="password1" required pattern="\S{8,}" placeholder="">
                <br>

                <a href="forgotPassword.html">Forgot password?</a>
                
                <input type="submit">
               
            </form>
        </div>
        <div id="logInButtons">
            <button type="button" id="showSignUpButton" onclick="signUpShow()" style="display: none;">
                Sign Up
            </button>
            <button type="button" id="showLogInButton" onclick="logInShow()" style="display: block;">
                Log In
            </button>
        </div>
    </div>
</main>

        <footer>
            <ul>
                <li>Copyright 2023</li>
                <li><a href="FAQ.html">FAQ</a></li>
                <li><a href="references.html">References</a></li>
            </ul>
        </footer>
</body>
</html>