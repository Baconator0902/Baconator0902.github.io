function planTripFormSubmit() {
    newLocation = document.getElementById('launch_location').value;

    partySize = document.getElementById("party_size").value;
    length = document.getElementById("trip_length").value;
    date = document.getElementById("date").value;
    monthTens = date.charAt(5);
    monthDays = date.charAt(6);
    month = monthTens + monthDays;

    cost = ((((newLocation))) / 100) * ((partySize + 10) / 15) * (length * 200) * 0.015;
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