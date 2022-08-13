import './CartWidget.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);

    const quantity = getQuantity();

    return(
        <div className='cartWidgetContainer'>
            <Link to='/cart'>
                <i className="fa-solid fa-cart-shopping" />
                <span>{quantity}</span>
            </Link>
        </div>
    );
}

export default CartWidget;