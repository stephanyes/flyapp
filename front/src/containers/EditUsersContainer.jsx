import React from "react";
import EditUsers from "../components/EditUsers";

import { connect } from "react-redux";

import {
  fetchUserList,
  deleteUser,
  promoteUser
} from "../store/actions/editUsers";

const mapStateToProps = state => {
  return {
    users: state.userEdit.userList
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    searchAllUsers: () => dispatch(fetchUserList()),
    deleteUser: id => dispatch(deleteUser(id)),
    promoteUser: id => dispatch(promoteUser(id))
  };
};

class EditUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePromote = this.handlePromote.bind(this);
  }
  componentDidMount() {
    this.props.searchAllUsers();
  }

  handleDelete(id) {
    this.props.deleteUser(id);
  }

  handlePromote(id) {
    this.props.promoteUser(id);
  }

  render() {
    let { users } = this.props;
    return (
      <EditUsers
        users={users}
        handleDelete={this.handleDelete}
        handlePromote={this.handlePromote}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUsersContainer);
