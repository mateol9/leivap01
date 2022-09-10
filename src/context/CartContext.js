import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (isInCart(productToAdd.id)) {
      const cartUpdated = cart.map(prod => {
        if (prod.id === productToAdd.id) {
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

  const getTotal = () => {
    let accu = 0

    cart.forEach(prod => {
      accu += prod.quantity * prod.price
    })

    return accu
  }

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, isInCart, getQuantity, getProductQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext);
