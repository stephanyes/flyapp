import React from "react";

import { connect } from "react-redux";
import UserOrder from "../components/UserOrder";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { setOrder } from "../store/actions/order";


const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    order: (order) => dispatch(setOrder(order))
  };
};

class UserOrderContainer extends React.Component {
  constructor(props) {
    super(props);
   this.handleClick=this.handleClick.bind(this)
   this.handleClickPayment=this.handleClickPayment.bind(this)

  }

  componentDidMount() {
    Axios.get(`/order/lala/${this.props.match.params.id}`)
      .then((ord) => this.props.order(ord.data))
  }

  handleClick(e) {

    Axios.post("/order/cancelorder", { e })
    this.props.history.push("/profile")

  }



  handleClickPayment(e) {
    const orderId = e.id
    Axios.get(`/order/orderpayment/${orderId}`)  
    this.props.history.push(`/payment/${orderId}`)   
  
  }


  render() {
    return (
      <UserOrder
        state={this.props.state}
        handleClick={this.handleClick}
        handleClickPayment={this.handleClickPayment}

      />
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOrderContainer));