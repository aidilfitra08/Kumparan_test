import React from "react";
import { Container, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { Table } from "reactstrap";


const mapStateToProps = (state) => {
  return {
    getPostList: state.post.getPostList,
    errorPostList: state.post.errorPostList,
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};
const PostComponent = (props) => {

  // let username = ""
  // for (let index = 0; index < props.getCityList.length; index++) {
  //   // props.getCityList[index].userId = 1111
  //   // console.log(props.getCityList[index].userId)
  //   for (let index2 = 0; index2 < props.getUsersList.length; index2++) {
  //     // console.log( props.getCityList[index].userId)
  //     if (props.getCityList[index].userId == props.getUsersList[index2].id) {
  //       props.getCityList[index].userId = props.getUsersList[index2].username
        
  //     }
  //   }
    
    
  // }
  return (
    <Container>
      {props.getPostList ? (
        

            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Username</th>
                  <th>User Company Name</th>
                </tr>
              </thead>
              {props.getPostList.map(post => {
                let company = 11111
                let username = ""
                
                  // console.log(post[index].userId)
                  for (let index2 = 0; index2 < props.getUsersList.length; index2++) {
                    // console.log(props.getUsersList[index2].company.name)
                    if (post.userId == props.getUsersList[index2].id) {
                      // post.userId = props.getUsersList[index2].username
                      username = props.getUsersList[index2].username
                      company = props.getUsersList[index2].company.name
                    }
                  }
                  
                  
                
                return(
                <tbody>
                  <tr>
                    <td>{post.id}</td>
                    <td><a href={"/posts/"+post.id}>{post.title}</a> </td>
                    <td>{post.body}</td>
                    <td>{username}</td>
                    <td width="200">{company}</td>
                  </tr>
  
                </tbody>
                )
                
              })
              }
              
            </Table>

        
      ) : (
        <div className="text-center">
                    {props.errorPostList ? (
            <h4>{props.errorPostList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(PostComponent);
