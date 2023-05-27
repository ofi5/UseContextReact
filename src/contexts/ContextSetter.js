import { createContext, useState } from "react";

export const ContextSetter = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log({ cart });

  const handleCart = (item) => {
    console.log(item);

    if (item.quantity) {
      item.quantity += 1;
    } else {
      item.quantity = 1;
      setCart((cart) => [...cart, item]);
    }
  };

  const removeItem = (item) => {
    console.log(item);
    console.log(cart);

    if (item.quantity > 1) {
      item.quantity -= 1;
      setCart((cart) => [...cart]);
    } else {
      item.quantity -= 1;
      setCart((cart) => cart.filter((cartItem) => cartItem.id !== item.id));
    }
  };

  return (
    <ContextSetter.Provider value={{ cart, handleCart, removeItem }}>
      {children}
    </ContextSetter.Provider>
  );
};
