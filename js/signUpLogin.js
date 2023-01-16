function signUpShow() {
    showSignUpButton = document.getElementById("showSignUpButton");
    showLogInButton = document.getElementById("showLogInButton");
    signUpDiv = document.getElementById("signUpDiv");
    logInDiv = document.getElementById("logInDiv");

    signUpDiv.style.display = "block";
    logInDiv.style.display = "none";
    showSignUpButton.style.display = "none";
    showLogInButton.style.display = "block";
}

function logInShow() {
    showSignUpButton = document.getElementById("showSignUpButton");
    showLogInButton = document.getElementById("showLogInButton");
    signUpDiv = document.getElementById("signUpDiv");
    logInDiv = document.getElementById("logInDiv");

    signUpDiv.style.display = "none";
    logInDiv.style.display = "block";
    showSignUpButton.style.display = "block";
    showLogInButton.style.display = "none";
}

