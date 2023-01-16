
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