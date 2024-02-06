import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgQDa0YWQropg6Ctfqn-2oWc8rSpPD5wo",
  authDomain: "marolio-supermercado.firebaseapp.com",
  projectId: "marolio-supermercado",
  storageBucket: "marolio-supermercado.appspot.com",
  messagingSenderId: "315154312526",
  appId: "1:315154312526:web:3ec635183ad701bb91021f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);