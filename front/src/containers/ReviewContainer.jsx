import React from "react";
import { connect } from "react-redux";
import NewReview from "../components/NewReview";
import Axios from "axios";

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
        this.state = {
            rating: "",
            comment: ""
        }
        this.sendComment = this.sendComment.bind(this)
        this.recibiendoRating = this.recibiendoRating.bind(this)
        this.sendToDb = this.sendToDb.bind(this)
    }

    recibiendoRating(e) {
        this.setState({
            rating: e
        })
    }

    sendComment(commentReview) {
        let text = commentReview.target.value
        this.setState({
            comment: text
        })
    }

    sendToDb(e) {
        e.preventDefault();
        Axios.post("/review/rateProduct", { rating: this.state.rating, comment: this.state.comment })
    }

    render() {
        return <NewReview estado={this.state.rating} submit={this.sendToDb} enviandoRating={this.recibiendoRating} sendComment={this.sendComment} />
    }
}
export default connect(null)(ReviewContainer);
