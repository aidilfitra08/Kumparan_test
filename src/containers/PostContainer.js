import React, { Component } from "react";
import PostComponent from "../components/PostComponent";
import { connect } from "react-redux";
import { getPostList} from '../actions/postAction'
import { getUsersList} from '../actions/userAction'

class PostContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPostList());
    this.props.dispatch(getUsersList());
    
  }

  render() {
    return (
      <div>
        <PostComponent />
      </div>
    );
  }
}

export default connect()(PostContainer);
