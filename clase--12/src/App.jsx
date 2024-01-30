import React from 'react'
import Loader from './componentes/Loader/Loader';
import LoaderApi from './componentes/LoaderApi/LoaderApi';
import TecnicaUno from './componentes/TecnicaUno/TecnicaUno';
import TecnicaDos from './componentes/TecnicaDos/TecnicaDos';
import TecnicaTres from './componentes/TecnicaTres/TecnicaTres';
import EstilosCondicional from './componentes/EstilosCondicional/EstilosCondicional';
import BotonCondicional from './componentes/BotonCondicional/BotonCondicional';

const App = () => {
  return (
    <div>
      <h1>Bienvenidos a la clase 12</h1>
      <h2>Tecnicas de Renderizado </h2>
      {/* <Loader/>
      <LoaderApi/> 
      <TecnicaUno nombre="Alan" />
      <TecnicaDos booleano={false}/>
      <TecnicaTres booleano={false} />
      <EstilosCondicional booleano={false} clase="nuevaClase" />*/}
      <BotonCondicional/>
    </div>
  )
}

export default App