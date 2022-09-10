import './CartWidget.css'
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useCartContext();

    const quantity = getQuantity();

    return (
        <div className={quantity === 0 ? 'cartWidgetHidden' : 'cartWidgetContainer'}>
            <Link to='/cart'>
                <i className="fa-solid fa-cart-shopping" />
                <span>{quantity}</span>
            </Link>
        </div>
    );
}

export default CartWidget;