import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ label }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });
    }, []);

    return(
        <>
            <h1>{label}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;