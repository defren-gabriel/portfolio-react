// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDEeGs90p85yp448v4TzXym5qvx5gmfOzo",
    authDomain: "site-pessoal-bfcb1.firebaseapp.com",
    projectId: "site-pessoal-bfcb1",
    storageBucket: "site-pessoal-bfcb1.appspot.com",
    messagingSenderId: "426105931428",
    appId: "1:426105931428:web:135dc2dec5dc3d87028831",
    measurementId: "G-EPS8Q1HGNQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};