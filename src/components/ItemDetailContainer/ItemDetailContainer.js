import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductDetail } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = () => {
    const { productId } = useParams();

    const getProductDetailFs = () => getProductDetail(productId);

    const { data, error, loading } = useAsync(getProductDetailFs, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }

    if (error) {
        return <h1>Se produjo un error inesperado</h1>
    }

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...data} />
        </div>
    )
}

export default ItemDetailContainer;