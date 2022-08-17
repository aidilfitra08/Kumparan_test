import axios from "axios";

export const GET_COMMENT_LIST = "GET_COMMENT_LIST";
export const GET_COMMENT_DETAIL = "GET_COMMENT_DETAIL";
// export const POST_USER_CREATE = "POST_USER_CREATE";
// export const PUT_USER_EDIT = "PUT_USER_EDIT";



export const getCommentList = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        dispatch({
          type: GET_COMMENT_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_COMMENT_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getCommentDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/COMMENTs/" +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_COMMENT_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_COMMENT_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};







