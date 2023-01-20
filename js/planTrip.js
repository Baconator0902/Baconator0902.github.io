function planTripFormSubmit() {
    locations = document.getElementsByName('launch_location');
    for(i = 0; i < locations.length; i++) {
        if(locations[i].checked) {
            checkedLocation = locations[i];
            locationNumber = i;
            console.log(checkedLocation);
        }
    }

    partySize = document.getElementById("party_size").value;
    length = document.getElementById("trip_length").value;
    date = document.getElementById("date").value;
    monthTens = date.charAt(5);
    monthDays = date.charAt(6);
    month = monthTens + monthDays;

    cost = ((locationNumber + 20 /15)) * (partySize * 0.75) * (length * 20000) * 0.6;
    if (month > 5 && month < 9) {
        cost *= 1.2;
    } else if (month < 3 || month > 11) {
        cost *= 1.1;
    }
    costToDisplay = Math.round((cost + Number.EPSILON) * 100) / 100;

    predictedCostText = document.getElementById("predictedCostText");
    predictedCostText.style.display = "block";
    predictedCostText.innerHTML = "Your predicted cost is: $" + costToDisplay.toLocaleString("en-US");

}