// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx-ofO6PQH4kPQuttDt31ZFY8PESf9UxI",
  authDomain: "haji-asmat-college.firebaseapp.com",
  projectId: "haji-asmat-college",
  storageBucket: "haji-asmat-college.appspot.com",
  messagingSenderId: "606522188611",
  appId: "1:606522188611:web:74c12ce41dcad947c9c5f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
