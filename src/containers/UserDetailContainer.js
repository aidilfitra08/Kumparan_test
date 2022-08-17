import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/userAction";
import { getPostDetail } from "../actions/postAction";
import DetailUserComponent from "../components/UserDetailComponent";

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
    // this.props.dispatch(getPostDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User</h1>
        <DetailUserComponent />
      </Container>
    );
  }
}

export default connect()(DetailUserContainer);
