export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => onSelect(p)}>Select</button>
        </div>
      ))}
    </div>
  );
}
