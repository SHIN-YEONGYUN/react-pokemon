// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkzvyTVz9LWp5rzwE5ZPX2LwDhzedeJag",
    authDomain: "react-pokemon-app-3ac3a.firebaseapp.com",
    projectId: "react-pokemon-app-3ac3a",
    storageBucket: "react-pokemon-app-3ac3a.appspot.com",
    messagingSenderId: "827975710064",
    appId: "1:827975710064:web:b3ced888edefff38988bb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;