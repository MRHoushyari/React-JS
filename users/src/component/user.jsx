import { Component } from "react";
class User extends Component {
  render() {
    return (
      <>
        <div className="col-3 p-3">
          <img src={this.props.userAvatar} />
          <h2>
            {this.props.userFirst_name} {this.props.userLast_name}
          </h2>
          <h3>{this.props.userEmail}</h3>
          <div className="row">
            <div className="p-3 col-6">
              <button
                className="btn btn-warning col-5"
                onClick={() => {
                  this.props.UserUpdate(this.props.UserId);
                }}
              >
                Update
              </button>
            </div>
            <div className="p-3 col-6">
              <button
                className="btn btn-danger col-5 m-1"
                onClick={() => {
                  this.props.UserDelete(this.props.UserId);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export { User };
