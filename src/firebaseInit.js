import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import{getAuth, setPersistence, browserSessionPersistence, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import{getDatabase} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';
const firebaseConfig = {
  apiKey: "AIzaSyAV52eQoFZmF9hH28vXGYpmkOV_BDNBqUk",
  authDomain: "testig-5d6e8.firebaseapp.com",
  databaseURL: "https://testig-5d6e8-default-rtdb.firebaseio.com",
  projectId: "testig-5d6e8",
  storageBucket: "testig-5d6e8.appspot.com",
  messagingSenderId: "473419932004",
  appId: "1:473419932004:web:93cb34a413515c7a555a71",
  measurementId: "G-G1KR8MTGKL",
    databaseURL: 'https://testig-5d6e8-default-rtdb.firebaseio.com/'
  };
  
  // Initialize Firebase
  export const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth(firebaseApp);
  setPersistence(auth, browserSessionPersistence);
  console.log("here:", auth);
  export const database = getDatabase(firebaseApp);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("test: ", user);
      


    } else {
    console.log("No one to see here");
    }
});


  