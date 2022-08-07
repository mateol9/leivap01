import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(); 

    const { productId } = useParams();

    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [productId])
    
    return(
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/> 
        </div>
    )
}

export default ItemDetailContainer;