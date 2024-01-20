/** AXIOS Y RENDER PROPS**/

//Axios es una libreria de JS que es muy popular. y me permite realizar peticiones HTTP. 
//Tiene una interfaz muy sencilla para interactuar con diferentes API´s.

//Ventajas: 
//Sintaxis simple, utiliza promesas y es compatible con todos los navegadores y con Node JS. 

//Pasos para utilizarla: 
//1) instalamos por consola con el comando: npm install axios
//2) Importamos y usamos. 

////////////////////////////////////////

//Render Props: 

//Este patrón implica pasar una función como una prop al componente hijo con el propósito de permitir al componente hijo renderizar su contenido a través de la función.
//En otras palabras, un componente padre puede pasar una función como prop al componente hijo y el componente hijo puede llamar a esa función en su renderizado para obtener información o funcionalidad específica que necesita.


import ObtenerClientes from "./componentes/ObtenerClientes/ObtenerClientes";
import CrearClientes from "./componentes/CrearClientes/CrearClientes";
import BotonEncendido from "./componentes/BotonEncendido/BotonEncendido";


const App = () => {
  return (
    <div>
      <h1>After 2 - Axios y Patrones de diseño</h1>
      <ObtenerClientes />
      <br /><hr />
      <CrearClientes />

      <h2>Render Props: boton de encendido </h2>
      <BotonEncendido render={({ onOff, manejadorBoton }) => (
        <div>
          <button onClick={manejadorBoton}> {onOff ? "Apagar" : "Encender"}  </button>
          <p> {onOff ? "El interruptor esta encendido" : "El interruptor esta apagado"}  </p>
        </div>
      )} />
    </div>
  )
}

export default App
