import{getAuth} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("test");
  });
}