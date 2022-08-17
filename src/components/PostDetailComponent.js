import React from "react";
import { connect } from "react-redux";
import { Table, Container, Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getPostDetail: state.post.getPostDetail,
    errorPostDetail: state.post.errorPostDetail,
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
    getPostComment: state.post.getCommentList,
    errorPostComment: state.post.errorCommentList,
    getCommentList: state.comment.getCommentList,
    errorCommentList: state.comment.errorCommentList,
  };
};

const PostDetailComponent = (props) => {
  // console.log(props.getUserDetail[0])
  console.log(props.getCommentList)
  let username = ""

  for (let index = 0; index < props.getUsersList.length; index++) {
    // console.log(props.getCityDetail.userId)
    if (props.getPostDetail.userId == props.getUsersList[index].id) {
      username = props.getUsersList[index].username
      // console.log(username)
    }
    
  }
  // let comment = props.getPostComment[0].body
  // return (
  //   <Table striped>
  //     <tbody>
  //       <tr>
  //         <td width="200">ID</td>
  //         <td width="10">:</td>
  //         <td>{props.getPostDetail.id}</td>
  //       </tr>
  //       <tr>
  //         <td width="200">Username</td>
  //         <td width="10">:</td>
  //         <td>{username }</td>
  //       </tr>
  //       <tr>
  //         <td width="200">Title</td>
  //         <td width="10">:</td>
  //         <td>{props.getPostDetail.title}</td>
  //       </tr>
  //       <tr>
  //         <td width="200">Body</td>
  //         <td width="10">:</td>
  //         <td>{props.getPostDetail.body}</td>
  //       </tr>
  //       <tr>
  //         <td width="200">Comment</td>
  //         <td width="10">:</td>
  //         {/* <td>{comment}</td> */}
  //       </tr>
  //     </tbody>
  //   </Table>
  // );

  return(
    <Container>
      {props.getPostDetail ? (
        

        <Table striped>
        <tbody>
          <tr>
            <td width="200">ID</td>
            <td width="10">:</td>
            <td>{props.getPostDetail.id}</td>
          </tr>
          <tr>
            <td width="200">Username</td>
            <td width="10">:</td>
            <td>{username }</td>
          </tr>
          <tr>
            <td width="200">Title</td>
            <td width="10">:</td>
            <td>{props.getPostDetail.title}</td>
          </tr>
          <tr>
            <td width="200">Body</td>
            <td width="10">:</td>
            <td>{props.getPostDetail.body}</td>
          </tr>
          <tr>
            <td width="200">Comment</td>
            <td width="10">:</td>
            {/* <td>{comment}</td> */}
          </tr>
        </tbody>
      </Table>
    
        
      ) : (
        <div className="text-center">
                    {props.errorPostDetail ? (
            <h4>{props.errorPostDetail}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(PostDetailComponent);
