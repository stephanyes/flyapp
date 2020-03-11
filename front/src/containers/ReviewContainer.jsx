import React from "react";
import { connect } from "react-redux";

import Review from "../components/Review";

// const mapDispatchToProps = function (dispatch, ownProps) {
//     return {
//         logout: user => dispatch(logout(user)),
//         orders: () => dispatch(getOrders())
//     };
// };
// const mapStateToProps = function (state) {
//     return {
//         user: state.userLogin.loginUser,
//         purchases: state.orders.ordersState
//     };
// };

class ReviewContainer extends React.Component {
    constructor() {
        super();

    }

    render() {
        return <Review />;
    }
}
export default connect(null)(ReviewContainer);
