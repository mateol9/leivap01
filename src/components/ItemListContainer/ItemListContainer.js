import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ label }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId).then(response => {
            setProducts(response);
        }).catch(error => {
            console.log(error);
        });
    }, [categoryId]);

    return(
        <>
            <h1>{label}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;