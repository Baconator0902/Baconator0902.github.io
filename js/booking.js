
function showBookFlight() {
    bookingDiv = document.getElementById("bookTripDIV");
    trainingDiv = document.getElementById("bookFlightTraining");
    physicalDiv = document.getElementById("bookAstroPhys");
    bookTripImage = document.getElementById("bookTripImage");
    bookTrainingImage = document.getElementById("bookTrainingImage");
    bookPhysicasImage = document.getElementById("bookPhysicasImage");
    bookingDiv.style.display = "block";
    trainingDiv.style.display = "none";
    physicalDiv.style.display = "none";

    bookTripImage.style.display = "block";
    bookTrainingImage.style.display = "none";
    bookPhysicasImage.style.display = "none";
}

//this is a test

function showTraining() {
    bookingDiv = document.getElementById("bookTripDIV");
    trainingDiv = document.getElementById("bookFlightTraining");
    physicalDiv = document.getElementById("bookAstroPhys");
    bookTripImage = document.getElementById("bookTripImage");
    bookTrainingImage = document.getElementById("bookTrainingImage");
    bookPhysicasImage = document.getElementById("bookPhysicasImage");

    bookingDiv.style.display = "none";
    trainingDiv.style.display = "block";
    physicalDiv.style.display = "none";

    bookTripImage.style.display = "none";
    bookTrainingImage.style.display = "block";
    bookPhysicasImage.style.display = "none";
}

function showBookPhysical() {
    bookingDiv = document.getElementById("bookTripDIV");
    trainingDiv = document.getElementById("bookFlightTraining");
    physicalDiv = document.getElementById("bookAstroPhys");
    bookTripImage = document.getElementById("bookTripImage");
    bookTrainingImage = document.getElementById("bookTrainingImage");
    bookPhysicasImage = document.getElementById("bookPhysicasImage");
    bookingDiv.style.display = "none";
    trainingDiv.style.display = "none";
    physicalDiv.style.display = "block";

    bookTripImage.style.display = "none";
    bookTrainingImage.style.display = "none";
    bookPhysicasImage.style.display = "block";
}

function tripBooked() {
    date = document.getElementById("date").value;
    firstName = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value;
    userName = firstName + " " + lastName;

    email = document.getElementById("email").value;
    size = document.getElementById("party_size").value;
    length = document.getElementById("trip_length").value;
    locations = document.getElementsByName('launch_location');
    locationSelected = false;
    for(i = 0; i < locations.length; i++) {
        if(locations[i].checked) {
            checkedLocation = locations[i];
            locationNumber = i;
            console.log(checkedLocation);
            locationSelected = true;
        }
    }
    covid = document.getElementById("covid_test").value;
    flightTraining = document.getElementById("flight_training_cert").value;
    physical = document.getElementById("astro_phys").value;

    console.log("name " + userName + "\n " + "email " + email + "\n "+ "date " + date + "\n "+ "size " + size + "\n "+ "length " + length + "\n "+ "covid " + covid + "\n "+ "location number " + locationNumber + "\n ")
    message = "";
    valid = true;

    if (!/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test(email)) {
        message += "Please enter a valid email address. \n";
        valid = false;
    }
    if (!/[A-Z][a-z]*/.test(firstName)) {
        message += "Please enter a valid first name. It must begin with a capital letter. \n"
        valid = false;
    }
    if (!/[A-Z][a-z]*/.test(lastName)) {
        message += "Please enter a valid last name. It must begin with a capital letter. \n"
        valid = false;
    }
    if (!(size >= 1 && size <= 5)) {
        message += "Please enter a valid party size. It must be between 1 and 5 people. \n";
        valid = false;
    }
    if (!(length >= 4 && length <= 100)) {
        message += "Please enter a valid trip length. It must be between 4 and 100 days. \n";
        valid = false;
    }
    if (date == null) {
        message += "Please enter a date \n";
        valid = false;
    }
    if (locationSelected == false) {
        message += "Please enter a location \n";
        valid = false;
    }
    if (covid == "") {
        message += "Please enter a covid screening form \n";
        valid = false;
    }
    if (flightTraining == "") {
        message += "Please enter a flight training form \n";
        valid = false;
    }
    if (physical == "") {
        message += "Please enter a physical form \n";
        valid = false;
    }

    if (valid == false) {
        window.alert(message);
    } else {
        window.alert("Thank you " + userName + "\nYour trip has been booked successfully for " + date + "! \nWe will email you when we are done going through your information.");

    }

    }

function trainingSubmitted() {
    message = "";
    valid = true;
    date = document.getElementById("date").value;
    date = document.getElementById("date").value;
    covid = document.getElementById("covid_test").value;
    size = document.getElementById("party_size").value;
    physical = document.getElementById("astro_phys").value;
    userName = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;

    if (covid == "") {
        message += "Please enter a covid screening form \n";
        valid = false;
    }
    if (!/[A-Z][a-z]*/.test(firstName)) {
        message += "Please enter a valid first name. It must begin with a capital letter. \n"
        valid = false;
    }
    if (!/[A-Z][a-z]*/.test(lastName)) {
        message += "Please enter a valid last name. It must begin with a capital letter. \n"
        valid = false;
    }
    if (date == null) {
        message += "Please enter a date \n";
        valid = false;
    }
    if (!(size >= 1 && size <= 5)) {
        message += "Please enter a valid party size. It must be between 1 and 5 people. \n";
        valid = false;
    }
    if (physical == "") {
        message += "Please enter a physical form \n";
        valid = false;
    }

    window.alert("Thank you " + userName + "\nYour training has been booked successfully for " + date + "! \nWe will email you when we are done going through your information.");
}

function physicalSubmitted() {
    message = "";
    valid = true;
    date = document.getElementById("date").value;
    covid = document.getElementById("covid_test").value;
    size = document.getElementById("party_size").value;
    userName = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;

    if (covid == "") {
        message += "Please enter a covid screening form \n";
        valid = false;
    }
    if (!/[A-Z][a-z]*/.test(firstName)) {
        message += "Please enter a valid first name. It must begin with a capital letter. \n"
        valid = false;
    }
    if (!/[A-Z][a-z]*/.test(lastName)) {
        message += "Please enter a valid last name. It must begin with a capital letter. \n"
        valid = false;
    }
    if (date == null) {
        message += "Please enter a date \n";
        valid = false;
    }
    if (!(size >= 1 && size <= 5)) {
        message += "Please enter a valid party size. It must be between 1 and 5 people. \n";
        valid = false;
    }

    window.alert("Thank you " + userName + "\nYour physical has been booked successfully for " + date + "! \nWe will email you when we are done going through your information.");
}