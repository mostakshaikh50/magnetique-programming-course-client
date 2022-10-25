// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaQ2E3TA5zJspLX282rzvU9_If_QITVg4",
  authDomain: "magnetique-course.firebaseapp.com",
  projectId: "magnetique-course",
  storageBucket: "magnetique-course.appspot.com",
  messagingSenderId: "898092844446",
  appId: "1:898092844446:web:16b5479bdaf0b532f7c28f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;