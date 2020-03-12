import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import Payment from "../components/Payment";
import { withRouter } from "react-router-dom";


const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    // eliminar: newCart => dispatch(removeProduct(newCart))
  };
};

class PaymentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        order: {}
    }
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount() {

    Axios.get(`/order/orderpayment/${this.props.match.params.id}`) 
      .then(algo => algo.data)
      .then(algo => {
        this.setState({ order: algo });
      });
  }

  handleClick(e) {
   Axios.post("/order/pay",{e})
   this.props.history.push("/profile")
  }

  render() {
    return <Payment handleClick={this.handleClick} user={this.props.state.userLogin.loginUser} order={this.state.order}/>;
  }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(PaymentContainer));
