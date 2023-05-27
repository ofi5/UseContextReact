import { useContext } from "react";
import { ContextSetter } from "../contexts/ContextSetter";

export function Cart() {
  const { cart, removeItem } = useContext(ContextSetter);

  return (
    <div>
      {cart.map((cloth) => {
        const { id, name, price, quantity } = cloth;

        return (
          <div>
            <p key={id}>
              {name} cost: {price}
            </p>
            <button onClick={() => removeItem(cloth)}>remove:{quantity}</button>
          </div>
        );
      })}
    </div>
  );
}
