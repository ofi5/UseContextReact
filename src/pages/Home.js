import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextSetter } from "..";

export function Home() {
  const { cart } = useContext(ContextSetter);

  return (
    <nav>
      <NavLink to="/"> home || </NavLink>
      <NavLink to="/cart"> cart </NavLink>
      <h3>Choose home or cart, items in cart = {cart.length}</h3>
    </nav>
  );
}
