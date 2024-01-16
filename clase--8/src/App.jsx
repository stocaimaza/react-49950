/** CLASE 8 - CHILDREN, HOOKS, CUSTOM HOOKS Y COMPONENTES DE ORDEN SUPERIOR**/

/*
Temas de hoy: 

- 1) Hooks
- 2) Customs Hooks
- 3) Children
- 4) Patrones de diseño

Hooks: son funciones propias de la librería que nos permiten optimizar el trabajo con componentes funcionales. 

Hasta el momento vimos: useState, useEffect, useRef y pronto vamos useParams, useContext. 

REGLAS PARA UTILIZAR HOOKS: 

- Los hooks son llamados unicamente en el nivel superior de un componente funcional. Nunca adentro de un condicional, un bucle o función anidada. 

- Los hooks pueden ser llamados desde componentes funcionales. No pueden ser llamados desde funciones regulares. 
El nombre con PascalCase le indica al sistema que se trata de un componente. 

2) Customs Hooks: nosotros también podemos crear nuestros propios hooks si queremos reutilizar lógica entre componentes. 

3) Children: es un propiedad especial que tienen todos los componentes de React que nos permite pasar elementos a un componente hijo, desde su invocación. 



*/
//import PracticaHooks from "./componentes/PracticaHooks/PracticaHooks";
import Card from "./componentes/Card/Card";
import Patrones from "./componentes/Patrones/Patrones";
import { mensajeConTitulo } from "./componentes/Patrones/Patrones";
import Mensaje from "./componentes/Patrones/Mensaje";

const App = () => {

  const NuevoComponente = mensajeConTitulo(Mensaje);


  return (
    <div>
      <h1>Bienvenidos a la clase 8 - React </h1>
      {/* <PracticaHooks/> */}
      {/* <Card nombre="Teclado Gamer" stock={50} precio={5000}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Computer_keyboard_ES_layout.svg" alt="Tecladito" />
        <strong>Tinki Winki</strong>
      </Card>

      <Card nombre="Monitor" stock={100} precio={50000}/> */}
      <Patrones/>
      <NuevoComponente/>


    </div>
  )
}

export default App