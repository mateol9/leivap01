import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { gec } from '../../services/firebase';


const ItemListContainer = ({ label }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionFiltered = !categoryId 
        ? collection(gec, 'products')
        : query(collection(gec, 'products'), where('category', '==', categoryId));

        getDocs(collectionFiltered)
            .then(response => {
                const newProducts = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]);

    if (loading) {
        return <h1>Cargando Productos...</h1>
    }

    return(
        <>
            <h1>{label}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;