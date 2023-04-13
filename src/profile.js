 import{auth, database, firebaseApp} from '/src/firebaseInit.js';
import{signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import{ getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

function getUser(userId){


return onValue(ref(database, 'users/' + userId), (snapshot) => {
    const firstName = (snapshot.val() && snapshot.val().firstname);
    console.log(firstName);
    const tripStart = (snapshot.val() && snapshot.val().tripDateBooked);
    const partySize = (snapshot.val()&& snapshot.val().partySizeBooked);
    const startDateT = (snapshot.val() && snapshot.val().trainingBooked);
    const partySizeT = (snapshot.val()&& snapshot.val().partySizeTrainingBooked);
    const tripStartP = (snapshot.val() && snapshot.val().physicalBooked);
    const partySizeP = (snapshot.val()&& snapshot.val().partySizePhysicalBooked);
    document.getElementById("username").innerHTML = "Welcome " + firstName;
    if(tripStart != null){
    document.getElementById("bookingText").innerHTML = "You have a trip booked with the start date of: " + tripStart + " and a party size of: " + partySize;
    }
    else{
        document.getElementById("bookingText").innerHTML = "You currently have no trips booked";
    }
    if(startDateT != null){
        document.getElementById("trainingText").innerHTML = "You have a training booked with the start date of: " + tripStart + " and a party size of: " + partySizeT;
        }
        else{
            document.getElementById("trainingText").innerHTML = "You currently have no trainings booked";
        }
        if(tripStartP != null){
            document.getElementById("physicalText").innerHTML = "You have a training booked with the start date of: " + tripStartP + " and a party size of: " + partySizeP;
            }
            else{
                document.getElementById("physicalText").innerHTML = "You currently have no trainings booked";
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