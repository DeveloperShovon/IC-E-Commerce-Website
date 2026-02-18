
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTauQn5ln3DL51ju-d5XTMu8rmPn9T02k",
  authDomain: "ic-e-commerce.firebaseapp.com",
  projectId: "ic-e-commerce",
  storageBucket: "ic-e-commerce.firebasestorage.app",
  messagingSenderId: "120417861692",
  appId: "1:120417861692:web:ac07480ece83821b20c339"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
