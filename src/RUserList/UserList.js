/*// @flow
import React, { Component } from "react";
import "./UserList.css";

type user = {
  first_name: string,
  last_name: string,
  avatar: string
};

const User = ({ first_name, last_name, avatar }) => (
  <div className="col-md-3 span3 well" key={avatar}>
    <center>
      <img
        src={avatar}
        name="aboutme"
        width="140"
        height="140"
        className="img-circle"
      />
      <h3>{first_name} {last_name}</h3>
    </center>
  </div>
);

class RUserList extends Component {
  state: { users: Array<user>, filtered: Array<user>, search: string };

  constructor() {
    super();
    this.state = { users: [], filtered: [], search: "" };
  }

  handleChange = e => {
    const inputValue: string = e.target.value;
    const filteredUsers = (inputValue === "")
      ? this.state.users
      : this.state.filtered.filter(user =>
          user.first_name.includes(inputValue)
        );
    this.setState(oldState => {
      return Object.assign(oldState, {
        filtered: filteredUsers,
        search: inputValue
      });
    });
  };

  componentDidMount() {

    // var userURL = "https://reqres.in/api/users?page=1&per_page=10";
    // fetch(userURL).then(response => response.json()).then(({ data: users }) => {
    //   this.setState({ users: users, filtered: users, search: "" });
    // });
  }

  render() {
    return (
      <div>
        <div className="row">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </div>
        {this.state.filtered.map(User)}
      </div>
    );
  }
}

export default UserList;*/
