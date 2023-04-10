
import{auth, database} from '/src/firebaseInit.js';
import{ onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
var bookButton =  document.getElementById("bookSubmit");
console.log(bookButton);
var trainingButton =  document.getElementById("trainingSubmit");
console.log(trainingButton);
var physicalButton =  document.getElementById("physicalSubmit");
console.log(physicalButton);

function onClickBookATrip(){
    onAuthStateChanged(auth, (user) => {
        
        if (user) {
          const startDate = document.getElementById("date")
          var uid = user.uid;
           const updateBookTrip = {
                bookedTripDate : startDate.value
           }
        
           const newPostKey = push(child(ref(database), 'posts')).key;
           
           const updates = {};
           updates['/posts/' + newPostKey] = updateBookTrip;
         updates['users/' + uid + '/' + newPostKey] = updateBookTrip;

        return update(ref(database), updates);

            
        } else {
        
        }
    });

}
function onClickBookATraining(){

}
function onClickBookAPhysical(){
    
}

bookButton.addEventListener('click', onClickBookATrip);