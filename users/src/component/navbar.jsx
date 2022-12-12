import { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand m-3" to="/">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/Users">
                Users
              </NavLink>
              <NavLink className="nav-item nav-link" to="/Login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/Register">
                Register
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export { Navbar };
