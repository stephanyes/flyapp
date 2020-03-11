import React from "react";
import { connect } from "react-redux";

import Profile from "../components/Profile";
import { logout } from "../store/actions/login";
import { getOrders } from "../store/actions/orderHistory";

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    logout: user => dispatch(logout(user)),
    orders: () => dispatch(getOrders())
  };
};
const mapStateToProps = function (state) {
  return {
    user: state.userLogin.loginUser,
    purchases: state.orders.ordersState
  };
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
  componentDidMount() {
    this.props.orders()
  }
  render() {
    return <Profile handleClick={this.handleClick} profile={this.props.user} orders={this.props.purchases} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
