import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { login } from "../store/actions/login";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    mandandoUser: user => dispatch(login(user))
  };
};

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleChange2(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .mandandoUser(this.state)
      .then(() => {
        let data = Object.assign({}, localStorage);
        let prod = Object.values(data);
        let produc = prod.map(e => JSON.parse(e));
        produc.map(producto => Axios.post("/cart/addtocart", { producto }));
      })
      .then(() => localStorage.clear())
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    return (
      <Login
        handleChange1={this.handleChange1}
        handleChange2={this.handleChange2}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer));
