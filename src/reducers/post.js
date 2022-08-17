import {
    GET_POST_LIST,
    GET_POST_DETAIL,
    GET_COMMENT_LIST,

  } from "../actions/postAction";
  
  let initialState = {
    getPostList: false,
    errorPostList: false,
    getPostDetail: false,
    errorPostDetail: false,
    getResponDataPost: false,
    errorResponDataPost: false,
    getCommentList: false,
    errorCommentList: false,
    title: "My App",
  };
  
  const post = (state = initialState, action) => {
    switch (action.type) {
      case GET_POST_LIST:
        return {
          ...state,
          getPostList: action.payload.data,
          errorPostList: action.payload.errorMessage,
        };
  
      case GET_POST_DETAIL:
        return {
          ...state,
          getPostDetail: action.payload.data,
          errorPostDetail: action.payload.errorMessage,
        };
  
      case GET_COMMENT_LIST:
        return {
          ...state,
          getCommentList: action.payload.data,
          errorCommentList: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default post;
  