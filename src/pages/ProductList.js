import { useContext } from "react";
import { ContextSetter } from "..";

export function ProductList({ products }) {
  const { handleCart } = useContext(ContextSetter);

  return (
    <div>
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "0.5rem",
            padding: "0.5rem"
          }}
        >
          <h2>
            {item.name} <small> INR {item.price} </small>
          </h2>
          <button onClick={() => handleCart(item)}> Add to Cart </button>
        </div>
      ))}
    </div>
  );
}
