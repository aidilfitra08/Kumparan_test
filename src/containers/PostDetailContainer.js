import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getPostDetail,  getPostComment } from "../actions/postAction";
import PostDetailComponent from "../components/PostDetailComponent";
import { getUsersList} from '../actions/userAction';
import { getCommentList} from '../actions/commentAction';

class DetailPostContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPostDetail(this.props.match.params.id));
    this.props.dispatch(getUsersList());
    this.props.dispatch(getPostComment(this.props.match.params.id));
    this.props.dispatch(getCommentList());
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Post</h1>
        <PostDetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailPostContainer);
