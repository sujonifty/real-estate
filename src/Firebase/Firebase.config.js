// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADEkYINO2hDBq5Ty9rjI5wgB_SmWDiNwI",
  authDomain: "residence-radar.firebaseapp.com",
  projectId: "residence-radar",
  storageBucket: "residence-radar.appspot.com",
  messagingSenderId: "446247882515",
  appId: "1:446247882515:web:9bb19bed5c1ddd9f1b14e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);