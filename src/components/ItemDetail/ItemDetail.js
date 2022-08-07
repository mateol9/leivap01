import Counter from '../Counter/Counter';
import './ItemDetail.css'

const ItemDetail = ({name, price, brand, stock, img}) => {
    const handleOnAdd = (quantity) => {
        console.log(`Cantidad Agregada: ${quantity}`);
    }

    return (
        <div className='itemDetail'>
            <div className='detailImgContainer'>
                <img src={img} />
            </div>
            <div className='detailInfoContainer'>
                <p className='detailTitle'>{name}</p>
                <p className='detailText'>Precio: ${price}</p>
                <p className='detailText'>Marca: {brand}</p>
                <p className='detailText'>Unidades Disponibles: {stock}</p>
                <Counter stock={stock} onAdd={handleOnAdd}/>
                <button className='detailBuyBtn'>Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail;