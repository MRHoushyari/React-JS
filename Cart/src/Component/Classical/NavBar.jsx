import { Component } from "react";
import { ProductsContext } from "../../context/productsContext";
class Navbar extends Component {
  static contextType = ProductsContext;
  render() {
    return (
      <>
        <div className="m-4 display-1 shadow-lg p-3 mb-5 bg-body rounded">
          {"Number of products: "}
          {this.sum()}
        </div>
      </>
    );
  }
  sum() {
    let sumOfProduct = 0;
    for (let key in this.context.products) {
      sumOfProduct += this.context.products[key].count;
    }
    return sumOfProduct;
  }
}

export { Navbar };
