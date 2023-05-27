import { ProductList } from "./pages/ProductList";
import { Cart } from "./pages/Cart";
import { products } from "./data/productsDB";
import { Home } from "./pages/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
