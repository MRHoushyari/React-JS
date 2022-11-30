import { useState } from "react";
import { Product } from "./../Temp/P_Temp";
const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, productName: "product1", count: 1 },
    { id: 2, productName: "product2", count: 0 },
    { id: 3, productName: "product3", count: 0 },
    { id: 4, productName: "product4", count: 5 },
  ]);
  const [count, setCount] = useState(0);
  const [productName, setProductName] = useState("");
  return (
    <>
      <button className="m-2 btn btn-dark" onClick={handleReset}>
        Reset
      </button>
      {products.map((p) => {
        return (
          <Product
            productName={p.productName}
            count={p.count}
            handlePluse={onPluse}
            handleMinus={onMinus}
            handleDelete={onDelete}
            id={p.id}
          />
        );
      })}
    </>
  );
  function handleReset() {
    const newProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(newProducts);
  }
  function onPluse(id) {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        p.count += 1;
      }
      return p;
    });
    setProducts(newProducts);
  }
  function onMinus(id) {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        p.count -= 1;
      }
      return p;
    });
    setProducts(newProducts);
  }
  function onDelete(id) {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
  }
};

export { Products };
