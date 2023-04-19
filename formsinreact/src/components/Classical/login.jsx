import { Component } from "react";
// import Input from "../Functional/input";
import * as Yup from "yup";
class Login extends Component {
  ////////////////////////////////////////////////////////////        state     ///////////////////////////
  state = { account: { email: "", password: "" }, errors: [] };

  ////////////////////////////////////////////////////////////        schema     ///////////////////////////
  schema = Yup.object().shape({
    email: Yup.string()
      .required("وارد کردن ایمیل ضروری میباشد!")
      .email("آدرس ایمیل معتبر نمی باشد!"),
    password: Yup.string()
      .required("وارد کردن پسوورد ضروری میباشد!")
      .min(4, "پسوورد باید حداقل 4 کارکتر باشد!"),
  });

  ////////////////////////////////////////////////////////////        validate     ///////////////////////////
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      this.setState({ errors: [] });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
    }
  };

  ////////////////////////////////////////////////////////////        handleChange     ///////////////////////////
  handleChange = (e) => {
    const input = e.target;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    console.log(e.target.value);
  };

  ///////////////////////////////////////////////////////////        handleSubmit     ///////////////////////////
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.account);
    const result = await this.validate();
    console.log(result);
  };

  ///////////////////////////////////////////////////////////        render     ///////////////////////////
  render() {
    return (
      <>
        {this.state.errors.length !== 0 && (
          <div className="alert alert-danger">
            <ul>
              {this.state.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}
        <form className="m-3" onSubmit={this.handleSubmit}>
          <label htmlFor={"email"}>Email :</label>
          <input
            name={"email"}
            className="form-control"
            type="text"
            id={"email"}
            onChange={this.handleChange}
          ></input>
          <div>
            <label htmlFor={"password"}>Password :</label>
            <input
              name={"password"}
              className="form-control"
              type="text"
              id={"password"}
              onChange={this.handleChange}
            ></input>
          </div>
          <button className="btn btn-primary mt-3">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
