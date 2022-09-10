import './Cart.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom';
import CartItems from '../CartItems/CartItems';

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  let totalPrice = 0;
  cart.map(prod => totalPrice += prod.price * prod.quantity)

  return (
    cart.length === 0 ?
      <div className='cartContainer'>
        <h1>Carrito Vacio</h1>
        <div className='cartText'>
          <Link to='/'>Volver a comprar</Link>
        </div>
      </div> :
      <div className='cartContainer'>
        <h1>Carrito</h1>
        {cart.map(prod => <CartItems key={prod.id} {...prod} />)}
        <p>Precio Total: ${totalPrice}</p>
        <button onClick={() => clearCart()}>Limpiar Carrito</button>
        <Link to='/checkout'>Comprar</Link>
      </div>
  )
}

export default Cart;
