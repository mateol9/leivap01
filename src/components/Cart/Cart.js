import './Cart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);
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
                {cart.map(prod => (
                    <div key={prod.id} className='cartItems'>
                        <img src={prod.img} alt={prod.name}></img>
                        <div className='cartText'>
                            <Link to={`/detail/${prod.id}`}>{prod.name}</Link>
                            <p>Precio Unitario: ${prod.price}</p>
                            <p>Cantidad: {prod.quantity}</p>
                            <p>Subtotal: ${prod.price * prod.quantity}</p>
                            <button onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                        </div>
                    </div>
                )
                )}
                <p>Precio Total: ${totalPrice}</p>
                <button onClick={() => clearCart()}>Limpiar Carrito</button>
                <Link to='/checkout'>Comprar</Link>
            </div>
    )
}

export default Cart;