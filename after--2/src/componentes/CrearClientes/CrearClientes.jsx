import {useState} from "react";
import axios from "axios";

const CrearClientes = () => {
    const [cliente, setCliente] = useState({
        nombre: "",
        email:"",
        telefono:""
    });


    //Funciones auxiliares: 


    const manejadorCambiosInput = (event) => {
        const {name, value} = event.target; 
        setCliente( prevCliente => ({
            ...prevCliente, 
            [name] : value
        }));
    }


    const manejadorSubmit = (event) => {
        event.preventDefault();
        //Con esto, evitamos la recarga de la página. 

        axios.post("https://jsonplaceholder.typicode.com/users", cliente)
            .then(respuesta => console.log("Cliente creado: ", respuesta.data))
            .catch(error => console.log("error fatal", error))

    }


  return (
    <div>
        <h2>Crear Clientes </h2>

        <form onSubmit={manejadorSubmit}> 
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" value={cliente.nombre} onChange={manejadorCambiosInput}  />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={cliente.email} onChange={manejadorCambiosInput} />

            <label htmlFor="telefono">Telefono</label>
            <input type="text" name="telefono" value={cliente.telefono} onChange={manejadorCambiosInput} />
            

            <button type="submit"> Crear cliente</button>
        </form>
    </div>
  )
}

export default CrearClientes