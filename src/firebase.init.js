// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB96MgbKMcjKa8QkqM30ZLItQw4R1Bkov8",
    authDomain: "ema-john-simple-91d59.firebaseapp.com",
    projectId: "ema-john-simple-91d59",
    storageBucket: "ema-john-simple-91d59.appspot.com",
    messagingSenderId: "141538275652",
    appId: "1:141538275652:web:0f10f0d8846d9794db6711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;