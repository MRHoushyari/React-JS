import axios from "axios";
import { useState } from "react";
import Input from "./input";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <Input name="email" label="Email :" />
        <Input name="password" label="Password :" />
        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </>
  );
};

export default Login;
