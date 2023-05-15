
import{auth, database} from '/src/firebaseInit.js';

import { set, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
var bookButton =  document.getElementById("bookSubmit");
var trainingButton =  document.getElementById("trainingSubmit");
var physicalButton =  document.getElementById("physicalSubmit");

const bookForm = document.getElementById("bookForm");
const trainingForm = document.getElementById("trainingForm");
const physicalForm = document.getElementById("physicalForm");

//Commit For GITTTT
function onClickBookATrip(event){
    event.preventDefault();
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
    

}
function onClickBookATraining(event){
    event.preventDefault();
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
function onClickBookAPhysical(event){
    event.preventDefault();
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

bookForm.addEventListener('submit', onClickBookATrip);
trainingForm.addEventListener('submit', onClickBookATraining);
physicalForm.addEventListener('submit', onClickBookAPhysical);