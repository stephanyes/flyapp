import React from "react";
import { connect } from "react-redux";

import Profile from "../components/Profile";
import { logout } from "../store/actions/login";
import { getDrafts, getConfirmed, getCancelled, getFulfilled, setOrder } from "../store/actions/order";
import Axios from "axios";

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    logout: user => dispatch(logout(user)),
    drafts: () => dispatch(getDrafts()),
    confirmed: () => dispatch(getConfirmed()),
    cancelled: () => dispatch(getCancelled()),
    fulfilled: () => dispatch(getFulfilled()),
    order: (order) => dispatch(setOrder(order))
  };
};
const mapStateToProps = function (state) {
  return {
    user: state.userLogin.loginUser,
    purchases: state.orders.ordersState,
    state
  };
};

class ProfileContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    Axios.get(`/order/lala/${e.id}`)
    this.props.order(e)
    // .then(() => this.props.history.push("/"))
    // .catch(() => this.setState({ error: true }));
  }
  componentDidMount() {
    this.props.drafts()
      .then(() => this.props.confirmed())
      .then(() => this.props.cancelled())
      .then(() => this.props.fulfilled())

  }
  render() {
    return <Profile handleClick={this.handleClick} profile={this.props.user} props={this.props} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
