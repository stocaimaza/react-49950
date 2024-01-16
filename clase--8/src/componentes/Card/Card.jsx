import './Card.css';

const Card = ({nombre, precio, stock, children}) => {
  return (
      <div className='contenedorProductos'>
        <h2> {nombre} </h2>
        <p> {precio} </p>
        <p> {stock} </p>
        {children}
    </div>
  )
}

export default Card