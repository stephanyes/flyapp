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
const mapStateToProps = function (state) {
    return {
        obtenerCosas: state.orders.selected.cart.products,
        testing: state.orders.selected.cart.id
    };
};

class ReviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: "",
            comment: "",
            productId: ""
        }
        this.sendComment = this.sendComment.bind(this)
        this.recibiendoRating = this.recibiendoRating.bind(this)
        this.sendToDb = this.sendToDb.bind(this)
    }

    componentDidMount() {
        this.setState({
            productId: this.props.match.params.id
        })
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
        alert("Thanks for the rating!")
        Axios.post("/review/rateProduct", { rating: this.state.rating, comment: this.state.comment, productId: this.state.productId, cartId: this.props.testing })
    }

    render() {
        return <NewReview estado={this.state.rating} submit={this.sendToDb} enviandoRating={this.recibiendoRating} sendComment={this.sendComment} />
    }
}
export default connect(mapStateToProps)(ReviewContainer);
