// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCX8gKrmKOiD1cDS_zMZLQMTZDMIsBvHmg",
    authDomain: "tes-login-1.firebaseapp.com",
    projectId: "tes-login-1",
    storageBucket: "tes-login-1.appspot.com",
    messagingSenderId: "590647178443",
    appId: "1:590647178443:web:738c32fdbf881a900ad74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//get the email and password values
const register = document.getElementById("submit-button");
//create account
register.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if both email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Please fill in both email and password fields.");
        return; // Do not proceed with registration if fields are empty
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Registering...");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});


