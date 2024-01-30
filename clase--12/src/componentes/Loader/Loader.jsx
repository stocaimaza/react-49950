import { useState, useEffect } from "react";

//un loader o spinner es un componente visual que se usa para indicar que estamos realizando una actividad en segundo plano y que estamos esperando la respuesta. 

const Loader = () => {
    const [loader, setLoader] = useState(true); 

    useEffect( () => {
        setTimeout(() => {
            setLoader(false);
        }, 3000)
    }, [])

  return (
    <div>
        { loader ? <h2>Cargando data!</h2> : <h2>Contenido Listo!</h2>}
    </div>
  )
}

export default Loader