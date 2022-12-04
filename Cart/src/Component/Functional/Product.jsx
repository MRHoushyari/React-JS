import { ProductsContext } from "../../context/productscontext";

import { useContext } from "react";
const Product = (props) => {
  const context = useContext(ProductsContext);
  return (
    <>
      <h1 className="m-4">{props.name}</h1>
      <span className="badge bg-info m-4">{props.count}</span>
      <span className="btn btn-success m-4" onClick={handlePluse}>
        +
      </span>
      <span className="btn btn-warning m-4" onClick={handleMinus}>
        -
      </span>
      <span className="btn btn-danger" onClick={handleDelete}>
        Delete
      </span>
    </>
  );
  function handleDelete() {
    const newProducts = context.products.filter((p) => {
      if (p.id !== props.id) return p;
    });
    context.handleStateUpdate(newProducts);
  }
  function handlePluse() {
    const newProducts = context.products.map((p) => {
      if (p.id === props.id) {
        p.count += 1;
      }
      return p;
    });
    context.handleStateUpdate(newProducts);
  }
  function handleMinus() {
    const newProducts = context.products.map((p) => {
      if (p.id === props.id) {
        p.count -= 1;
      }
      return p;
    });
    context.handleStateUpdate(newProducts);
  }
};

export { Product };
