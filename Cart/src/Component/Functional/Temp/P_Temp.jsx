const Product = (props) => {
  return (
    <div>
      <h2 className="m-2">{props.productName}</h2>
      <span className="m-2 badge bg-info">
        {/* {props.count === 0 ? "Zero" : props.count} */}
        {Format(props.count)}
      </span>
      <button
        className="m-2 btn btn-success"
        onClick={() => {
          props.handlePluse(props.id);
        }}
      >
        +
      </button>
      <button
        className="m-2 btn btn-warning"
        onClick={() => {
          props.handleMinus(props.id);
        }}
      >
        -
      </button>
      <button
        className="m-2 btn btn-danger"
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
  function Format(count) {
    if (count === 0) return "Zero";
    else return count;
  }
};

export { Product };
