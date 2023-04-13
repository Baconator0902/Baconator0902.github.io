
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
      console.log("before");
      const user = auth.currentUser;
      if (user) {
          var startDate = document.getElementById("date1");
          var uid = user.uid;
          console.log(uid + " LOOK CLOSELY");
          update(ref(database, 'users/' + uid),{
           tripDate : startDate,  
        })
        .then(()=>{window.location.replace("./index.html");}, err => {console.error(err)});


        } else {

        }
    

}
function onClickBookATraining(){

}
function onClickBookAPhysical(){
    
}

bookButton.addEventListener('click', onClickBookATrip);