import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from 'firebase/firestore'
import { gec } from '../../services/firebase' 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {

        getDoc(doc(gec, 'products', productId))
            .then(response => {
                const data = response.data();
                const newProduct = { id: response.id, ...data }
                setProduct(newProduct);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }
    
    return(
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/> 
        </div>
    )
}

export default ItemDetailContainer;