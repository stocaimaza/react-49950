import { useState, useEffect } from "react";

const Automatico = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    useEffect( () => {
        let tiempoEspera = null; 

        const reiniciarTemporizador = () => {
            clearTimeout(tiempoEspera);
            tiempoEspera = setTimeout( ()=> {
                setMostrarMensaje(true);
            }, 5000)
        }

        const manejadorActividadUsuario = () => {
            reiniciarTemporizador();
        }

        window.addEventListener("mousemove", manejadorActividadUsuario);
        window.addEventListener("keydown", manejadorActividadUsuario);

        return () => {
            window.removeEventListener("mousemove", manejadorActividadUsuario);
            window.removeEventListener("keydown", manejadorActividadUsuario);
            clearTimeout(tiempoEspera);
        }
    }, [])

    const seguirMirandoTele = () => {
        setMostrarMensaje(false);
    }

  return (
    <div>
        {
            mostrarMensaje && (
                <div>
                    <p>¿Seguis con vida?</p>
                    <button onClick={seguirMirandoTele}> Seguir mirando pelis </button>
                </div>
            )
        }
        <h2>Netflix</h2>
        <p> El Padrino II </p>



    </div>
  )
}

export default Automatico