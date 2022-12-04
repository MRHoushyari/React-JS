import { Products } from "./products";
import { useState } from "react";
import { ProductsContext } from "../../context/productscontext";
import { Navbar } from "./navbar";
const App = () => {
  const [products, setProducts] = useState([
    { id: 0, productName: "Product 1", count: 10 },
    { id: 1, productName: "Product 2", count: 2 },
    { id: 2, productName: "Product 3", count: 0 },
    { id: 3, productName: "Product 4", count: 5 },
  ]);
  const handleStateUpdate = (products) => {
    setProducts(products);
  };
  return (
    <>
      <ProductsContext.Provider value={{ products, handleStateUpdate }}>
        <Navbar />
        <Products />
      </ProductsContext.Provider>
    </>
  );
};

export { App };
