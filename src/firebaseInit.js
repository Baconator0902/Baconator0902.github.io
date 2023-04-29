import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getAuth, setPersistence, browserSessionPersistence } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

export * from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
export * from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
export * from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyAV52eQoFZmF9hH28vXGYpmkOV_BDNBqUk",
    authDomain: "testig-5d6e8.firebaseapp.com",
    projectId: "testig-5d6e8",
    storageBucket: "testig-5d6e8.appspot.com",
    messagingSenderId: "473419932004",
    appId: "1:473419932004:web:93cb34a413515c7a555a71",
    measurementId: "G-G1KR8MTGKL",
    databaseURL: 'https://testig-5d6e8-default-rtdb.firebaseio.com/'
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence);
const database = getDatabase(firebaseApp);

const initialized = { firebaseApp, auth, database };

export default initialized;