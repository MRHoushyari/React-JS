import { Component } from "react";
import axios from "axios";
import Input from "../Functional/input";
class Login extends Component {
  state = { account: { email: "", password: "" } };
  handleChange = (e) => {
    const input = e.target;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    // this.setState({account[]:e.target.value});
    // console.log(e.target.value);
    // console.log(e.target.name);
    // this.state.account[e.]
    // console.log(e.nativeEvent.data);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.email.current.value && this.password.current.value) {
      console.log(this.email.current.value);
      const response = await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });
      console.log(response);
    } else {
      console.log("empty");
    }
  };
  render() {
    return (
      <>
        <form className="m-3" onSubmit={this.handleSubmit}>
          <Input name="email" label="Email :" />
          <Input name="password" label="Password :" />
          <button className="btn btn-primary mt-3">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
