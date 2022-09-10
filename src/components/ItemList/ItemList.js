import './ItemList.css'
import Item from '../Item/Item'
import { memo } from 'react'

const ItemList = ({ products }) => {
    return (
        <div className='itemCardContainer'>
            {products?.map((prod) => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default memo(ItemList);
