import {db} from "../../services/config.js";
import { doc, updateDoc } from "firebase/firestore";

//En este ejercicio vamos a actualizar la colleccion "ordenesCompra" que creamos en el ejercicio anterior. 
//Vamos a modificar el e-mail del cliente. 

const Actualizar = () => {

    const orderDoc = doc(db, "ordenesCompra", "7lNQzWL95eOTYtO5FrOf");

    //Actualizamos el documento con el id: 7lNQzWL95eOTYtO5FrOf de la colección "ordenesCompra" modificando el email del cliente: 

    updateDoc(orderDoc,{email: "coder@coderhouse.com"});


  return (
    <div>Actualizar</div>
  )
}

export default Actualizar