import { Component } from "react";
import { Products } from "./products";
import { Navbar } from "./NavBar";
import { ProductsContext } from "../../context/productsContext";

class App extends Component {
  state = {
    products: [
      { id: 0, productName: "Product 1", count: 10 },
      { id: 1, productName: "Product 2", count: 2 },
      { id: 2, productName: "Product 3", count: 0 },
      { id: 3, productName: "Product 4", count: 5 },
    ],
  };
  render() {
    return (
      <>
        <ProductsContext.Provider
          value={{
            products: this.state.products,
            onUpdate: this.handleUpdate,
          }}
        >
          <Navbar p={this.state.products}></Navbar>
          <button className="m-2 btn btn-dark" onClick={this.handleReset}>
            Reset
          </button>
          <Products></Products>
        </ProductsContext.Provider>
      </>
    );
  }
  handleUpdate = (newState) => {
    this.setState({ products: newState });
  };
  handleReset = () => {
    const newProducts = this.state.products;
    for (const key in newProducts) {
      newProducts[key].count = 0;
    }
    this.setState({ products: newProducts });
  };
}
export { App };
