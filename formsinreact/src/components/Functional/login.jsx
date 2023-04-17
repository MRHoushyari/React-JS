import { useRef } from "react";
import axios from "axios";
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://reqres.in/api/login", {
      email: email.current.value,
      password: password.current.value,
    });
    console.log(response);
    // console.log(email.current.value);
    // console.log(password.current.value);
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
