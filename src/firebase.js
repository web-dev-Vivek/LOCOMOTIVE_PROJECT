// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNBI75Ja0I-MBIb5fAb6VBy--cC3gDKQ0",
  authDomain: "enter-e0827.firebaseapp.com",
  projectId: "enter-e0827",
  storageBucket: "enter-e0827.firebasestorage.app",
  messagingSenderId: "564103446887",
  appId: "1:564103446887:web:a125f2223744ecab142fc2",
  measurementId: "G-FHCHQCEXYE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
