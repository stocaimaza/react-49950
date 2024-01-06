import React from 'react'
import TodoList from './componentes/TodoList/TodoList';
import './App.scss';

/* STORAGE */
//Nos permite guardar datos de manera local en el navegador. 
//El navegador nos ofrece dos formas de guardar datos. 

//LocalStorage. 
//SessionStorage.

//LocalStorage: almacena datos de forma indefinida, hasta que el usuario los borra de foma manual. 

//SessionStorage: almacena datos hasta que el usuario cierra el navegador. 


const App = () => {
  //Vamos a trabajar con setItem() y getItem()

  localStorage.setItem("curso", "react");
  localStorage.setItem("numerito", 123654);
  localStorage.setItem("booleano", true);

  let recuperoNumerito = localStorage.getItem("numerito");
  console.log(recuperoNumerito, typeof recuperoNumerito);

  const gato = {
    nombre: "Pulga", 
    edad: 2
  }

  //1) Pasamos el objeto a JSON. 
  const gatoJSON = JSON.stringify(gato);
  //2) Lo guardo en el localStorage: 
  localStorage.setItem("gato", gatoJSON);

  //SI LO QUIERO RECUPERAR, HAGO EL CAMINO CONTRARIO: 
  //1) Recupero el JSON del localStorage. 
  const recuperoGatoJSON = localStorage.getItem("gato"); 
  //2) Paso el JSON nuevamente a objeto: 
  const objetoGatoNuevamente = JSON.parse(recuperoGatoJSON); 
  console.log(objetoGatoNuevamente);


  return (
    <div>
      <TodoList/>
    </div>
  )
}

export default App