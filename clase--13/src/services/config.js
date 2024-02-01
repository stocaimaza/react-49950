import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//Vamos a importar dos funciones del módulo Firebase. 
//initializeApp: me permite iniciar la conexión con Firebase
//getFirestore: me permite obtener una instancia de Firestore. 

//Esto es un objeto con toda nuestra información de la cuenta. 
//Y acá se incluye la key personal para acceder a la bd. 
const firebaseConfig = {
  apiKey: "AIzaSyCgQDa0YWQropg6Ctfqn-2oWc8rSpPD5wo",
  authDomain: "marolio-supermercado.firebaseapp.com",
  projectId: "marolio-supermercado",
  storageBucket: "marolio-supermercado.appspot.com",
  messagingSenderId: "315154312526",
  appId: "1:315154312526:web:3ec635183ad701bb91021f"
};

//Inicializamos Firebase y se pasa la configuración como argumento. 
//Esto me retorna una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

//Ahora uso esa instancia para obtener el servicio de Firestore: 
export const db = getFirestore(app);
