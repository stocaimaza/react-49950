//2) En linea con fragment. 

//La usamos cuando deseamos renderizar un elemento condicional en función de una expresión booleana. 

const TecnicaDos = ({booleano}) => {
  return (
    <>
        {booleano && <h2>Usuario registrado</h2>}
        {!booleano && <h2>Usuario no AUTORIZADO</h2>}
    </>
  )
}
//Recibo un booleano, si es true voy a renderizar el elemento. 
//! = niega el valor
export default TecnicaDos