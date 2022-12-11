import { Component } from "react";
import { LoadingUser } from "./skeletonUsersLoading";
import { User } from "./user";
class Users extends Component {
  state = { users: [], loading: true };
  userData = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ];
  constructor() {
    super();
    setTimeout(() => {
      this.setState({ users: this.userData, loading: false });
    }, 3000);
  }
  render() {
    return (
      <>
        <button className="btn btn-success m-3" onClick={this.handleAdd}>
          {" "}
          ADD{" "}
        </button>
        <div className="row text-center p-4">
          {this.state.loading ? (
            <LoadingUser />
          ) : (
            this.state.users.map((user) => {
              return (
                <User
                  userAvatar={user.avatar}
                  userFirst_name={user.first_name}
                  userLast_name={user.last_name}
                  userEmail={user.email}
                  UserId={user.id}
                  UserDelete={this.handleDelete}
                  UserUpdate={this.handleUpdate}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
  handleAdd = () => {
    const newUser = {
      id: 7,
      email: "mr.houshyari@gmail.com",
      first_name: "Mohammad Reza",
      last_name: "Houshyari",
      avatar: "../../../../../../Desktop/PersonalPic.png",
    };
    this.setState({ users: [...this.state.users, newUser] });
  };
  handleDelete = (id) => {
    const newUsers = this.state.users.filter((user) => {
      if (user.id !== id) {
        return user;
      }
    });
    this.setState({ users: newUsers });
  };
  handleUpdate = (id) => {
    const newUsers = [...this.state.users];
    for (const key in newUsers) {
      if (newUsers[key].id === id) {
        newUsers[key].id = 100;
        newUsers[key].first_name = "Mohammad Reza";
        newUsers[key].last_name = "Houshyari";
        newUsers[key].email = "MohammadHoushyari@Gmail.com";
      }
    }
    this.setState({ users: newUsers });
  };
}
export { Users };
