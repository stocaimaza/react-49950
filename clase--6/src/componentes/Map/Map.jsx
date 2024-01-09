//Método MAP: 
//En React lo utilizamos generalmente para crear una lista de componentes o elementos a partir de un array de datos. 


const Map = () => {

    const productos = [
        {id: 1, nombre: "Notebook", precio: 1000},
        {id: 2, nombre: "Teclado", precio: 200},
        {id: 3, nombre: "Mouse", precio: 100},
        {id: 4, nombre: "Monitor", precio: 800}
    ]

  return (
    <div>
        <h2> Productos de Computación</h2>
        <ul>
            {
                productos.map( (producto, indice) => (
                    <li key={indice}>
                        <span> {producto.nombre} </span>
                        <span> {producto.precio} </span>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Map