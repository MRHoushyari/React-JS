import { Component } from "react";
// import { Users } from "./users";
import axios from "axios";
class App extends Component {
  state = { users: [] };
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=1").then((users) => {
      this.setState({ users: users.data.data });
    });
  }
  render() {
    return (
      <>
        <span className="btn btn-success m-3"> ADD </span>
        <div className="row text-center p-4">
          {this.state.users.map((user) => {
            return (
              <>
                <div className="col-3 p-3">
                  <img src={user.avatar} />
                  <h2>
                    {user.first_name} {user.last_name}
                  </h2>
                  <h3>{user.email}</h3>
                  <div className="row">
                    <div className="p-3 col-6">
                      <span className="btn btn-warning col-5">Update</span>
                    </div>
                    <div className="p-3 col-6">
                      <span className="btn btn-danger col-5 m-1">Delete</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export { App };
