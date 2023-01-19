
function showBookFlight() {
    bookingDiv = document.getElementById("bookTripDIV");
    trainingDiv = document.getElementById("bookFlightTraining");
    physicalDiv = document.getElementById("bookAstroPhys");
    bookingDiv.style.display = "block";
    trainingDiv.style.display = "none";
    physicalDiv.style.display = "none";
}

//this is a test

function showTraining() {
    bookingDiv = document.getElementById("bookTripDIV");
    trainingDiv = document.getElementById("bookFlightTraining");
    physicalDiv = document.getElementById("bookAstroPhys");

    bookingDiv.style.display = "none";
    trainingDiv.style.display = "block";
    physicalDiv.style.display = "none";
}

function showBookPhysical() {
    bookingDiv = document.getElementById("bookTripDIV");
    trainingDiv = document.getElementById("bookFlightTraining");
    physicalDiv = document.getElementById("bookAstroPhys");
    bookingDiv.style.display = "none";
    trainingDiv.style.display = "none";
    physicalDiv.style.display = "block";
}

function tripBooked() {
    date = document.getElementById("date").value;
    userName = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
    window.alert("Thank you " + userName + "\nYour trip has been booked successfully for " + date + "! \nWe will email you when we are done going through your information.");
}

function trainingSubmitted() {
    date = document.getElementById("date").value;
    userName = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
    window.alert("Thank you " + userName + "\nYour training has been booked successfully for " + date + "! \nWe will email you when we are done going through your information.");
}

function physicalSubmitted() {
    date = document.getElementById("date").value;
    userName = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
    window.alert("Thank you " + userName + "\nYour physical has been booked successfully for " + date + "! \nWe will email you when we are done going through your information.");
}