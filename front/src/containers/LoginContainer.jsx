import React from "react";
import { connect } from "react-redux";

import Login from "../components/Login";
import { login } from "../store/actions/login";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.mandandoUser(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    mandandoUser: user => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(LoginContainer);
