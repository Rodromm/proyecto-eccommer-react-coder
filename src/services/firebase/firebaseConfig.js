import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaYzY7923ScTvR1-Ss1n_RG4HWfXlrr4s",
    authDomain: "eccomerce-proyectofinal.firebaseapp.com",
    projectId: "eccomerce-proyectofinal",
    storageBucket: "eccomerce-proyectofinal.appspot.com",
    messagingSenderId: "121281268654",
    appId: "1:121281268654:web:828630cd1a17cfc610d63f"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)