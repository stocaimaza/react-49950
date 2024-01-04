/** CLASE 3 - COMPONENTES 2 **/

//1) Props y children
//2) Ciclos de vida de los componentes:  es una serie de estados por los cuales pasa todo componente a lo largo de su existencia. 

//Montaje: (Ingresa el componente al DOM)
//Actualización: (Actualizo el valor del contador)
//Desmontaje: cuando retiramos el componente, cuando desaparece. 


import Articulos from "./componentes/Articulos/Articulos";
import Contador from "./componentes/Contador/Contador";
import Categorias from "./componentes/Categorias/Categorias";
import UtilizamosUseRef from "./componentes/UtilizamosUseRef/UtilizamosUseRef";

const App = () => {
  return (
    <div>
      {/* <Articulos img="https://placekitten.com/200/287" titulo="Los gatitos mas tiernos"/>

      <br />

      <Articulos img="https://placekitten.com/408/287" titulo ="La salud de tu gatiño">
          <strong> Tiempo de lectura: 3 minutos </strong>
          <h3>Tengo sueño</h3>
      </Articulos>

      <Articulos img="https://placekitten.com/408/287" titulo ="La salud de tu gatiño">
          <ul>
            <li>Hola</li>
            <li>Mundo</li>
          </ul>
      </Articulos> */}

      <Contador stock={10} inicial={1}/>
      <Categorias/>
      <UtilizamosUseRef/>

    </div>
  )
}

export default App
