// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1qsM9brE4B-UgSO5yMI6sHfPKDs0UWtQ",
  authDomain: "movmemories-834fc.firebaseapp.com",
  databaseURL: "https://movmemories-834fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movmemories-834fc",
  storageBucket: "movmemories-834fc.firebasestorage.app",
  messagingSenderId: "590841030170",
  appId: "1:590841030170:web:22735d533f9fb78951d3a3",
  measurementId: "G-QG8LV53MW2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
