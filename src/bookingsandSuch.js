
import{auth, database} from '/src/firebaseInit.js';
import{ onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { set, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
var bookButton =  document.getElementById("bookSubmit");
var trainingButton =  document.getElementById("trainingSubmit");
var physicalButton =  document.getElementById("physicalSubmit");

function onClickBookATrip(){
    /*
    var firstName = document.getElementById('first_name');
    var lastName = document.getElementById('last_name');
    var email = document.getElementById('emailText');
    var party_size = document.getElementById('party_size');
    var date = document.getElementById('date1');
    var trip_length = document.getElementById('trip_length');
    var covid_test = document.getElementById('covid_test');
    var flight_training_cert = document.getElementById('flight_training_cert');
    var astro_phys = document.getElementById('astro_phys');
    console.log(email);
    var checkValues1 = firstName.value.length == 0 || lastName.value.length == 0 || email.value.length == 0;
    var checkValues2 = party_size.value.length == 0 || date.value.length == 0 || trip_length.value.length == 0;
    var checkValues3 = covid_test.value.length == 0 || flight_training_cert.value.length == 0 || astro_phys.value.length == 0;
    var checkValuestotal = checkValues1 || checkValues2 || checkValues3;
    if (!checkValuestotal) {
        */
        const user = auth.currentUser;
        if (user) {
            var startDate = document.getElementById("date1");
            var partySize = document.getElementById("party_size")
            var uid = user.uid;
          
            update(ref(database, 'users/' + uid),{
             tripDateBooked : startDate.value,  
             partySizeBooked : partySize.value,
          })
          .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});
    
          } else {
              window.alert("Trip succesfully planned. To save a booking, please create an account and resubmit");
          }
          
    } /*else {
        alert("Please fill in all fields");
    } */

function onClickBookATraining(){

    const user = auth.currentUser;
    if (user) {
        var startDateT = document.getElementById("dateTraining");
        var partySizeT = document.getElementById("party_sizeTraining")
        var uid = user.uid;
     
       
        update(ref(database, 'users/' + uid),{
         trainingBooked : startDateT.value,  
         partySizeTrainingBooked : partySizeT.value,
      })
      .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});

      } else {
          window.alert("Training succesfully planned. To save a training, please create an account and resubmit");
      }
  
}
function onClickBookAPhysical(){
    const user = auth.currentUser;
    if (user) {
        var startDateP = document.getElementById("physicalDate");
        var partySizeP = document.getElementById("party_sizePhysical")
        var uid = user.uid;
     
        
        update(ref(database, 'users/' + uid),{
         physicalBooked : startDateP.value,  
         partySizePhysicalBooked : partySizeP.value,
      })
      .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});

      } else {
          window.alert("Physical succesfully planned. To save this planning, please create an account and resubmit");
      }
}

bookButton.addEventListener('click', onClickBookATrip);
trainingButton.addEventListener('click', onClickBookATraining);
physicalButton.addEventListener('click', onClickBookAPhysical);