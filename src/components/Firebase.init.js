// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwQ7LSIZTZDhLTYBV0qy4E7huV51kTlg",
  authDomain: "laptop-analiger.firebaseapp.com",
  projectId: "laptop-analiger",
  storageBucket: "laptop-analiger.appspot.com",
  messagingSenderId: "933572545168",
  appId: "1:933572545168:web:c1b32b9e2c806236cbe615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;