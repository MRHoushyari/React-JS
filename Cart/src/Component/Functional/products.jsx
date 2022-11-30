import { useState } from "react";
import { Product } from "./Product";
const Products = () => {
  const [products, setProducts] = useState([
    { productName: "Laptop1", count: 0, id: 1 },
    { productName: "Laptop2", count: 0, id: 2 },
    { productName: "Laptop3", count: 0, id: 3 },
    { productName: "Laptop4", count: 0, id: 4 },
  ]);
  return (
    <>
      {products.map((p, index) => {
        return (
          <Product
            id={p.id}
            handleDelete={onDelete}
            key={index}
            productName={p.productName}
            count={p.count}
          >
            test lorem
          </Product>
        );
      })}
    </>
  );
  function onDelete(productId) {
    const newProducts = products.filter((p) => {
      return productId !== p.id;
    });
    setProducts(newProducts);
  }
};

export { Products };
