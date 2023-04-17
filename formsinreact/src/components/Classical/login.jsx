import { Component } from "react";
import { createRef } from "react";
import axios from "axios";
class Login extends Component {
  email = createRef();
  password = createRef();
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.email.current.value && this.password.current.value) {
      // console.log("Not Empty");
      // console.log(this.email.current.value);
      // console.log(this.password.current.value);
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
          <div>
            <label htmlFor="Email">Email :</label>
            <input
              className="form-control"
              type="text"
              id="Email"
              ref={this.email}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              className="form-control"
              type="text"
              id="password"
              ref={this.password}
            ></input>
          </div>
          <button className="btn btn-primary mt-3">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
