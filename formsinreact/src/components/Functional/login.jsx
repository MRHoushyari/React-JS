import { useRef } from "react";
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <>
      <form className="m-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email">Email :</label>
          <input
            className="form-control"
            type="text"
            id="Email"
            ref={email}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            className="form-control"
            type="text"
            id="password"
            ref={password}
          ></input>
        </div>
        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </>
  );
};

export default Login;
