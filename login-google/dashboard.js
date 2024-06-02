import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCX8gKrmKOiD1cDS_zMZLQMTZDMIsBvHmg",
    authDomain: "tes-login-1.firebaseapp.com",
    projectId: "tes-login-1",
    storageBucket: "tes-login-1.appspot.com",
    messagingSenderId: "590647178443",
    appId: "1:590647178443:web:738c32fdbf881a900ad74e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//get user detail slots

onAuthStateChanged(auth, (user) => {
    if (user) {
        //get user details
        const uid = user.uid;

        const email = document.getElementById('userEmail');
        const username = document.getElementById('userName');
        const profile = document.getElementById('profileImage');
        const time = document.getElementById('lastSeen');
        //append user details
        email.innerText = user.email;
        username.innerText = user.displayName;
        profile.src = "https://lh3.googleusercontent.com/a/ACg8ocLKnJjfskBaCFPsLm8YN2vuXzWCE8iyF0WiKA5XoAqC2w=s96-c"
        console.log(user)


    } else {
        alert("logged out...")
        window.location.href = "index.html"
    }
});

const logout = document.getElementById("logout");
logout.addEventListener("click" , function(){
    signOut(auth).then(() => {
       alert("logging out...");
       window.location.href = "index.html"
      }).catch((error) => {
        // An error happened.
      });
})