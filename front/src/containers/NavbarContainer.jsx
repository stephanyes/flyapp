import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";

class NavbarContainer extends React.Component {
  render() {
    return <Navbar />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(null, null)(NavbarContainer);
