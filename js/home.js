<<<<<<< HEAD

        function bookNow() {
            window.location = "book.html";
        }

       $("#pastTripsCarousel").flickity({
        wrapAround: true,
        autoPlay: 1500,
        pauseAutoPlayOnHover: false
    
       });
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUbwVCTDfEYVRhq_ZnuDOauF4rNk3GWPY",
  authDomain: "webmastertest-50fb0.firebaseapp.com",
  projectId: "webmastertest-50fb0",
  storageBucket: "webmastertest-50fb0.appspot.com",
  messagingSenderId: "183582984454",
  appId: "1:183582984454:web:98ce6c09a3e20dda713687",
  measurementId: "G-XB13RPF1ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
>>>>>>> 4f05397 (asd)
