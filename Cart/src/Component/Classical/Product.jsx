import { Component } from "react";
import { ProductsContext } from "../../context/productsContext";
class Product extends Component {
  static contextType = ProductsContext;
  render() {
    return (
      <>
        <div className="m-4">
          <h2 className="m-2">
            {this.context.products[this.props.index].productName}
          </h2>
          <span className="m-2 badge bg-info">
            {this.countFormater(this.props.count)}
          </span>
          <button className="m-2 btn btn-success" onClick={this.onIncrement}>
            +
          </button>
          <button className="m-2 btn btn-warning" onClick={this.onDecrement}>
            -
          </button>
          <button className="m-2 btn btn-danger" onClick={this.onDelete}>
            Delete
          </button>
        </div>
      </>
    );
  }
  onIncrement = () => {
    const newProducts = this.context.products.map((p) => {
      if (p.id === this.props.index) {
        p.count += 1;
      }
      return p;
    });
    this.context.onUpdate(newProducts);
  };
  onDecrement = () => {
    const newProducts = this.context.products.map((p) => {
      if (p.id === this.props.index) {
        p.count -= 1;
      }
      return p;
    });
    this.context.onUpdate(newProducts);
  };
  onDelete = () => {
    const newProducts = this.context.products.filter(
      (p) => p.id !== this.context.products[this.props.index].id
    );
    this.context.onUpdate(newProducts);
  };
  countFormater = (count) => {
    return count === 0 ? "Zero" : count;
  };
}

export { Product };
