import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from '../../services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = ({ label }) => {
    const { categoryId } = useParams();

    const getProductsFs = () => getProducts(categoryId);

    const { data, error, loading } = useAsync(getProductsFs, [categoryId]);

    if (loading) {
        return <h1>Cargando Productos...</h1>
    }

    if (error) {
        return <h1>Se produjo un error inesperado</h1>
    }

    return (
        <>
            <h1>{`${label} ${categoryId || ''}`}</h1>
            <ItemList products={data} />
        </>
    )
}

export default ItemListContainer;