import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbSGQ1nzhWe9QxcLbzURlEZE4hOFzSOF8",
  authDomain: "reactecommerce-a5fbb.firebaseapp.com",
  projectId: "reactecommerce-a5fbb",
  storageBucket: "reactecommerce-a5fbb.appspot.com",
  messagingSenderId: "864883069321",
  appId: "1:864883069321:web:f436e40d8a65d3325c5158"
};


const app = initializeApp(firebaseConfig);
export const gec = getFirestore(app);