import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  // handleUsernameChange = event => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // };

  // handlePasswordChange = event => {
  //   this.setState({
  //     password: event.target.value
  //   });
  // };

  // abstracted both of the above methods into this single change handler
  // name attributes of inputs must match the keys in state for this to work:
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // if both fields are filled in, call handleLogin
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
