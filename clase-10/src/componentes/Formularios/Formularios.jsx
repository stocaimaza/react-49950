import { useState } from "react";

const Formularios = () => {
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [email, setEmail] = useState(""); 

    //Función auxiliar para manejar el submit: 

    const manejadorFormulario = (e) => {
        e.preventDefault();
        //Evitamos la recarga de la página. 
        const nuevoCliente = { 
            nombre, 
            apellido,
            email
        }; 

        console.log(nuevoCliente);

        //Limpiamos los inputs: 
        setNombre("");
        setApellido("");
        setEmail("");
    }

  return (
    <form onSubmit={manejadorFormulario}>

        <h2> Datos de Contacto </h2>

        <label htmlFor=""> Nombre </label>
        <input type="text" onChange={(e) => setNombre(e.target.value)  }  value={nombre}/>
        <br /><br />

        <label htmlFor=""> Apellido </label>
        <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
        <br /><br />

        <label htmlFor=""> Correo Electrónico </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <br /><br />

        <button type="submit"> Enviar </button>

    </form>
  )
}

export default Formularios