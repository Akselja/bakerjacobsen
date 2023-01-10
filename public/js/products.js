// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBkL4u-8AM6To_p91eEoRF_1hK7SDIvi4E",

  authDomain: "bakerjacobsen.firebaseapp.com",

  projectId: "bakerjacobsen",

  storageBucket: "bakerjacobsen.appspot.com",

  messagingSenderId: "883650941569",

  appId: "1:883650941569:web:0cf90026e845432e3b3380"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
