import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

export default function App() {
  const [count, setCount] = useState(0);

  // ✅ products reference is now stable
  const products = useMemo(() => [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ], []);

  // ✅ Expensive calculation runs ONLY when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ Function reference stays SAME across renders
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  console.log("App rendered");

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}
