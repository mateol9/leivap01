import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';
import { Link } from "react-router-dom";
import './ItemDetail.css'

const ItemDetail = ({ id, name, brand, price, img, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0);

    const { addItem, getProductQuantity } = useCartContext();

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity);

        const productToAdd = {
            id, name, price, img, quantity
        }

        addItem(productToAdd);
    }

    const productQuantity = getProductQuantity(id);

    return (
        <div className='itemDetail'>
            <div className='detailImgContainer'>
                <img src={img} alt={name} />
            </div>
            <div className='detailInfoContainer'>
                <p className='detailTitle'>{name}</p>
                <p className='detailText'>Precio: ${price}</p>
                <p className='detailText'>Marca: {brand}</p>
                <p className='detailText'>Unidades Disponibles: {stock}</p>
                <div>
                    {
                        quantityToAdd === 0 ?
                            <Counter stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
                            :
                            <>
                                <Link to='/cart' className='detailBuyBtn'>Finalizar Compra</Link>
                                <Link to='/' className='detailBuyBtn'>Seguir Comprando</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
