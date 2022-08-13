import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);
    
    const addItem = (productToAdd) => {
        if(isInCart(productToAdd.id)) {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated;
                } else {
                    return prod;
                }
            });

            setCart(cartUpdated);
        } else {
            setCart([...cart, productToAdd]);
        }
    };
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        const filteredCart = cart.filter(prod => prod.id !== id);
        setCart(filteredCart);
    }

    const getQuantity = () => {
        let acc = 0;

        cart.forEach(prod => {
            acc += prod.quantity
        });
        
        return acc;
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id);
        return product?.quantity;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, isInCart, getQuantity, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
