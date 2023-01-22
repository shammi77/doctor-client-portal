// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJionfaUfiS3_uXaYY1rmkRpSMs98ITio",
  authDomain: "doctors-portal-31800.firebaseapp.com",
  projectId: "doctors-portal-31800",
  storageBucket: "doctors-portal-31800.appspot.com",
  messagingSenderId: "749102404417",
  appId: "1:749102404417:web:314887de8c672f011747c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;