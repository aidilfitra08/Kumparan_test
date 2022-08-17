import React, { Component } from "react";
import UserComponent from "../components/UserComponent";
import PostComponent from "../components/PostComponent";
import { connect } from "react-redux";
import { getUsersList } from '../actions/userAction'
import { getPostList } from '../actions/postAction'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(getPostList());
  }

  render() {
    
    return (
      <div>
        {/* <TableComponent /> */}
        <UserComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
