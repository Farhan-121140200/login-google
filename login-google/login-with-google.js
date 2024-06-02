// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


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
const provider = new GoogleAuthProvider();
auth.languageCode = 'en';



const login = document.getElementById("google-login")
login.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            window.location.href = "../logged.html";

            alert("Login Successful :)" + user.email);
            window.location.href = "dashboard.html";

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error)

            alert(errorMessage)

        });
})