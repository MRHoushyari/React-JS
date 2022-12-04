import { Product } from "./product";
import { ProductsContext } from "../../context/productscontext";

import { useContext } from "react";
const Products = () => {
  const context = useContext(ProductsContext);
  return (
    <>
      {context.products.map((p, index) => {
        return (
          <div>
            <Product
              name={p.productName}
              count={p.count}
              id={p.id}
              key={index}
            />
          </div>
        );
      })}
    </>
  );
};

export { Products };
