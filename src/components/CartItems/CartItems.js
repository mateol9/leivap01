import './CartItem.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartItems = ({ name, id, img, price, quantity }) => {
  const { removeItem } = useCartContext();

  return (
    <div className='cartItems'>
      <img src={img} alt={name}></img>
      <div className='cartText'>
        <Link to={`/detail/${id}`}>{name}</Link>
        <p>Precio Unitario: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: ${price * quantity}</p>
        <button onClick={() => removeItem(id)}>Eliminar Producto</button>
      </div>
    </div>
  )
}

export default CartItems