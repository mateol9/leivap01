import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className='cartWidgetContainer'>
            <i className="fa-solid fa-cart-shopping" />
            <span>10</span>
        </div>
    );
}

export default CartWidget;