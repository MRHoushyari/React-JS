import { useState } from "react";
const Product = (props) => {
  let [count, setCount] = useState(props.count);
  return (
    <div>
      <h2 className="m-2 p-2">{props.productName}</h2>
      <span className="badge bg-info m-2">{formatCount(count)}</span>
      <button className="btn btn-success m-2" onClick={handlePluse}>
        +
      </button>
      <button className="btn btn-warning m-2" onClick={handleMinus}>
        -
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        Delete
      </button>
      <p>{props.children}</p>
    </div>
  );
  function formatCount(count) {
    if (count === 0) return "Zero";
    else return count;
  }
  function handlePluse() {
    setCount(count + 1);
  }
  function handleMinus() {
    setCount(count - 1);
  }
};

export { Product };
