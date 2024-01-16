import { useState, useEffect } from "react";

const Simpsons = () => {
    const [personaje, setPersonaje] = useState([]);

    useEffect( () => {
    //     fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=100")
    //         .then(respuesta => respuesta.json() )
    //         .then(data => setPersonaje(data))
    //         .catch(error => console.log(error))

        //Si quiero trabajar con async y await en lugar de then y catch puedo realizar lo siguiente: 

        //Puedo usar try catch que me permite manejar errores. Si algo adentro del try falla, el código continua por el catch. 

        const pedirPersonajes = async () => {
            try {
                const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=2");
                const data = await respuesta.json(); 
                setPersonaje(data);
            } catch (error) {
                console.error(error);
            }
        }

        pedirPersonajes();

    }, [])


  return (
    <div>
        <h2>Los Simpsons</h2>
        {
            personaje.map((personaje, indice) => {
                return (
                    <div key={indice}>
                        <p>Nombre: {personaje.character} </p>
                        <img src={personaje.image} alt={personaje.character} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Simpsons