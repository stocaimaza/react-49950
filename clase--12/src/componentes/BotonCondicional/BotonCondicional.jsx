//Vamos un Login Condicional: 

import { useState } from "react";

const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    //Creo los estados para el usuario y la contraseña: 
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    //Si queremos capturar algun tipo de error: 
    const [error, setError] = useState("");

    //Funciones aux: 

    const habilitarUsuario = (e) => {
        e.preventDefault();
        //Implementen la lógica de validación que quieran: 
        if (usuario === "Tinki" && pass === "Winki") {
            setVerificado(true);
        } else {
            setError("Datos incorrectos, hacker!!");
            setUsuario("Vete!");
            setPass("Malvado!");
        }
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }


    return (
        <>
            {
                verificado ? (<button onClick={deshabilitarUsuario} > Cerrar Sesión </button>) : (

                    <form onSubmit={habilitarUsuario}>
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" id="usuario" onChange={(e) => setUsuario(e.target.value)}  value={usuario} />
                        <br /><br />

                        <label htmlFor="pass">Password</label>
                        <input type="text" id="pass" onChange={(e) => setPass(e.target.value)} value={pass}  />
                        <br /><br />

                        <button> Iniciar Sesión </button>
                        {error && <p style={{color:"red"}}> {error} </p>}
                    </form>
                )
            }
        </>
    )
}

export default BotonCondicional