import { db } from "../../services/config";
import { addDoc, collection } from "firebase/firestore";

const Creacion = () => {

    //1) Voy a crear el objeto "ordenCompra", que incluye el array de items y un objeto cliente: 
    const ordenCompra = {
        items: [
            {id:1, nombre: "Lapiz", cantidad: 10, precio: 1000},
            {id:2, nombre: "Regla", cantidad: 3, precio: 9000},
            {id:3, nombre: "Carpeta", cantidad: 2, precio: 10000},
        ],
        cliente: {nombre: "Jim", apellido: "Morrison", email: "jimi@hotmail.com"}
    }

    //2) Creamos una función "enviarOrden". 
    const enviarOrder = () => {
        const colectionOrdenesCompra = collection(db, "ordenesCompra");

        //3) Agregar un documento a la colección "ordenesCompra", este documento va a tener los datos del objeto "ordenCompra", que creamos lineas mas arriba: 

        addDoc(colectionOrdenesCompra, ordenCompra)
            .then((refDocumento) => {
                console.log("Creamos un documento con el ID: ", refDocumento.id);
            })
            .catch(error => console.log("Tenemos un error al cargar el documento", error))
    }

    enviarOrder();


  return (
    <div>Creacion</div>
  )
}

export default Creacion