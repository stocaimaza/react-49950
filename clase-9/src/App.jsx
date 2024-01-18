//React Router: es una librería de enrutamiento para React. 
//Nos permite navegar entre componentes sin tener que recargar la página. 


//¿Cómo la utilizamos? 
//1) Instalamos: npm install react-router-dom
//2) Importar en nuestra aplicación componentes de la librería. 
//BrowserRouter, Route, Routes. 
//BrowserRouter: envuelve a todos los componentes de mi aplicación y habilita la navegación entre ellos. 
//Routes: definir las rutas de navegación. 
//Route: define una ruta en particular. 
//Importante! Tenemos que completar las propiedas "path" con la ruta a vincular. Y en element pasamos el componente o elemento que queremos que se renderice cuando hacemos click.

import Computadoras from "./componentes/Computadoras/Computadoras";
import Celulares from "./componentes/Celulares/Celulares";
import Sillas from "./componentes/Sillas/Sillas";
import Home from "./componentes/Home/Home";
import Menu from "./componentes/Menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/sillas/:id" element={<Sillas />} />
          <Route path="/computadoras" element={<Computadoras />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h2>Sitio en construcción!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}




export default App




/* <h1>Bienvenidos a la clase 9</h1>

<h2>Enlaces</h2>
<h3>Enlace Absoluto</h3>
<a href="https://www.mercadolibre.com.ar" target='_blank'>MercadoLibre</a>

<h3>Enlaces relativos</h3>
<a href="">Otro gato</a> */