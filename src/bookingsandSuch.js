
import{auth, database} from '/src/firebaseInit.js';
import{ onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { set, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
var bookButton =  document.getElementById("bookSubmit");
console.log(bookButton);
var trainingButton =  document.getElementById("trainingSubmit");
console.log(trainingButton);
var physicalButton =  document.getElementById("physicalSubmit");
console.log(physicalButton);

function onClickBookATrip(){

      const user = auth.currentUser;
      if (user) {
          var startDate = document.getElementById("date1");
          var partySize = document.getElementById("party_size")
          var uid = user.uid;
        
          if(startDate != null){
          update(ref(database, 'users/' + uid),{
           tripDateBooked : startDate.value,  
           partySizeBooked : partySize.value,
        })
        .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});
    }
    else{
        window.alert("Please fill out the required form");
        }
        } else {
            window.alert("Trip succesfully planned. To save a booking, please create an account and resubmit");
        }
    

}
function onClickBookATraining(){

    const user = auth.currentUser;
    if (user) {
        var startDateT = document.getElementById("dateTraining");
        var partySizeT = document.getElementById("party_sizeTraining")
        var uid = user.uid;
     
        if(startDate != null){
        update(ref(database, 'users/' + uid),{
         trainingBooked : startDateT.value,  
         partySizeTrainingBooked : partySizeT.value,
      })
      .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});
  }
  else{
      window.alert("Please fill out the required form");
      }
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
     
        if(startDate != null){
        update(ref(database, 'users/' + uid),{
         physicalBooked : startDateP.value,  
         partySizePhysicalBooked : partySizeP.value,
      })
      .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});
  }
  else{
      window.alert("Please fill out the required form");
      }
      } else {
          window.alert("Physical succesfully planned. To save this planning, please create an account and resubmit");
      }
}

bookButton.addEventListener('click', onClickBookATrip);
trainingButton.addEventListener('click', onClickBookATraining);
physicalButton.addEventListener('click', onClickBookAPhysical);