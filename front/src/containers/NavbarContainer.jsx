import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";

class NavbarContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.user);
  }

  render() {
    const { user } = this.props;
    return <Navbar user={user} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.userLogin.loginUser
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
