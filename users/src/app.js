import { Component } from "react";
import { Users } from "./component/users";
import { Navbar } from "./component/navbar";
import { Home } from "./component/home";
import { Login } from "./component/login";
import { Register } from "./component/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import axios from "axios";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Users" element={<Users id='test' />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
export { App };
