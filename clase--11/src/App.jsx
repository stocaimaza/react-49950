//Aprendimos en estas clases que podemos enviar información entre componentes  a traves de las props. Pero estas se envían de forma unidireccional de un componente padre a un componente hijo. 
//En aplicaciones grandes con muchas capas de componentes esto se convierte en una tarea tediosa. 

//Ejemplo: "La Herencia Familiar"; 

//Para solucionar esto React presenta una herramienta llamada "Context". 
//En el contexto podemos almacenar datos o funciones que esten disponibles en toda la app. 

//El Context trabaja en dos partes: el proveedor y el consumidor. 

//El provider es un componente que proporciona los datos que vamos a compartir y el Consumer es quien utiliza los datos proporcionados por el Provider. 

import Abuelo from "./componentes/Abuelo/Abuelo";
import { Contexto } from "./context/context";

const App = () => {

  const herencia = {
    efectivo: 15161561165121,
    propiedades: 20,
    vehiculos: 30
  }


  return (
    <div>
      <Contexto.Provider value = {herencia}>
        <h1>Bienvenidos a la clase 11 - Context</h1>
        <Abuelo />
      </Contexto.Provider>
    </div>
  )
}

export default App