import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, name, price, img, stock}) => {
    return(
        <div className="itemCard">
            <p className='itemCardTitle'>{name}</p>
            <img src={img} />
            <p className='itemCardText'>Precio: ${price}</p>
            <Link to={`/detail/${id}`} className='itemCardBtn'>Ver detalle</Link>
            <p className='itemCardText'>Unidades Disponibles: {stock}</p>
        </div>
    )
}

export default Item;