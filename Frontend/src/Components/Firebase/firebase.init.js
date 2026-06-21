// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPG1dmTKJfN2KKDdebgj6ObMhhg61_vAY",
  authDomain: "kamal-and-sons.firebaseapp.com",
  projectId: "kamal-and-sons",
  storageBucket: "kamal-and-sons.firebasestorage.app",
  messagingSenderId: "584053314999",
  appId: "1:584053314999:web:4c76c3efa856a7e528c432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);