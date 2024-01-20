import {useState, useEffect} from "react";
import axios from "axios";

const ObtenerClientes = () => {
    const [clientes, setClientes] = useState([]); 

    useEffect( ()=> {
        //Métodos: 
        //get = obtener info.
        //post = enviar info. 
        //put = actualizar info. 
        //delete = borrar info. 

        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(respuesta => setClientes(respuesta.data))
        //     .catch( error => console.log("Vamos a morir ", error ))

        //Otra forma de hacerlo: 

        const misNuevosClientes = async() => {
            const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users");
            setClientes(respuesta.data);
        }

        misNuevosClientes();

    }, [])
  return (
    <div>
        <h1>Lista de Clientes: </h1>
        <ul>
            {
                clientes.map(cliente => (
                    <li key={cliente.id} > {cliente.name}  </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ObtenerClientes