import { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    productName: "My Product",
    imageUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <>
        <img src={this.state.imageUrl} alt="" />
        <span className="m-4">{this.formatCount()}</span>
        <button className="btn btn-secondary">Increase</button>
      </>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <span className="badge bg-warning">Zero</span> : count;
    if (count === 0) return <span className="badge bg-warning">Zero</span>;
    else return count;
  }
}

export { Counter };
