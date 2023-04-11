 import{auth, database, firebaseApp} from '/src/firebaseInit.js';
import{signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import{ getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

function getUser(userId){


return onValue(ref(database, 'users/' + userId), (snapshot) => {
    const firstName = (snapshot.val() && snapshot.val().firstname);
    console.log(firstName);
    const tripStart = (snapshot.val() && snapshot.val().bookedTripDate);
    document.getElementById("username").innerHTML = "Welcome " + firstName;
    if(tripStart != "N/A"){
    document.getElementById("bookingText").innerHTML = "You have a trip booked with the start date of: " + tripStart;
    }
},
{onlyOnce: true}); 
}

onAuthStateChanged(auth, (user) => {
        
    if (user) {
       
        var uid = user.uid;
        getUser(uid);
    } else {
    
    }
});