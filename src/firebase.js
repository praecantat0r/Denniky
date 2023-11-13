// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOq_QsOmMEiCqHrOX9rpBbB4jAvzz7MME",
  authDomain: "denniky-34792.firebaseapp.com",
  projectId: "denniky-34792",
  storageBucket: "denniky-34792.appspot.com",
  messagingSenderId: "405186192275",
  appId: "1:405186192275:web:06046466e7edca911b7e66",
  measurementId: "G-PPN1FJ0QBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app