import { Component } from "react";
import { Product } from "./Product";
import { ProductsContext } from "../../context/productsContext";
class Products extends Component {
  static contextType = ProductsContext;
  render() {
    return (
      <>
        {this.context.products.map((p, index) => {
          return <Product index={this.context.products.findIndex(object=>object.id === p.id)} key={index} count={p.count} />;
        })}
      </>
    );
  }
}

export { Products };
