import axios from "axios";

export const GET_POST_LIST = "GET_POST_LIST";
export const GET_POST_DETAIL = "GET_POST_DETAIL";
export const GET_COMMENT_LIST = "GET_COMMENT_LIST";



export const getPostList = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        dispatch({
          type: GET_POST_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_POST_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getPostDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +id)
      .then(function (response) {
        dispatch({
          type: GET_POST_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_POST_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getPostComment = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +id + "/comments")
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
