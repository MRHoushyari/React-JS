import { Component } from "react";
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  render() {
    return (
      <>
        <form className="m-3" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Email">Email :</label>
            <input className="form-control" type="text" id="Email"></input>
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input className="form-control" type="text" id="password"></input>
          </div>
          <button className="btn btn-primary mt-3">
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
