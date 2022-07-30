import './Item.css'

const Item = ({product}) => {
    return(
        <div className="itemCard">
            <p className='itemCardTitle'>{product.name}</p>
            <img src={product.img}></img>
            <p className='itemCardText'>Precio: ${product.price}</p>
            <button>Ver detalle</button>
            <p className='itemCardText'>Unidades Disponibles: {product.stock}</p>
        </div>
    )
}

export default Item;