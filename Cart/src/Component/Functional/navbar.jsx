import { ProductsContext } from "../../context/productscontext";

import { useContext } from "react";
const Navbar = () => {
  const context = useContext(ProductsContext);
  return (
    <>
      <div className="m-4 display-1 shadow-lg p-3 mb-5 bg-body rounded">
        Number Of Products: {sum()}
      </div>
    </>
  );
  function sum() {
    let sumOfProduct = 0;
    for (let key in context.products) {
      sumOfProduct += context.products[key].count;
    }
    return sumOfProduct;
  }
};

export { Navbar };
