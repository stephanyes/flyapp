import React from "react";
import { connect } from "react-redux";
import { getCategoryById } from "../store/actions/category";
import CategorySingle from '../components/CategorySingle'

const mapDispatchToProps = function (dispatch, ownProps) {
    return {

        buscandoCategoriasPorId: (id) => dispatch(getCategoryById(id))

    };
};
const mapStateToProps = function (state) {
    return {
        products: state.category.selectedProducts
    };
};

class CategorySingleContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.buscandoCategoriasPorId(this.props.match.params.id);
    }


    render() {
        return <CategorySingle products={this.props.products} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategorySingleContainer);
