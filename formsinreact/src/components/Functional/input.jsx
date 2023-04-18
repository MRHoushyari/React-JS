// const Input = (props) => {
const Input = ({name, value,  label, onChange}) => {
  return (
    <>
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          name={name}
          value={value}
          className="form-control"
          type="text"
          id={name}
          onChange={onChange}
        ></input>
      </div>
    </>
  );
};

export default Input;
