import React from 'react'
//3) Operador Ternario

const TecnicaTres = ({booleano}) => {
  return (
    <div>
        {
            booleano ? <h3>Acceso Permitido</h3> : <h4>Acceso denegado raton!</h4>
        }
    </div>
  )
}

export default TecnicaTres