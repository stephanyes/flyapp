import React from "react";
import { connect } from "react-redux";

import Profile from "../components/Profile";
import { logout } from "../store/actions/login";

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    logout: user => dispatch(logout(user))
  };
};
const mapStateToProps = function(state) {
  return {};
};

class ProfileContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props
      .logout()
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }));
  }
  render() {
    return <Profile handleClick={this.handleClick} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
