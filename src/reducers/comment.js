import {
    GET_COMMENT_LIST,
    GET_COMMENT_DETAIL,

  } from "../actions/commentAction";
  
  let initialState = {
    getCommentList: false,
    errorCommentList: false,
    getCommentDetail: false,
    errorCommentDetail: false,
    title: "My App",
  };
  
  const comment = (state = initialState, action) => {
    switch (action.type) {
      case GET_COMMENT_LIST:
        return {
          ...state,
          getCommentList: action.payload.data,
          errorCommentList: action.payload.errorMessage,
        };
  
      case GET_COMMENT_DETAIL:
        return {
          ...state,
          getCommentDetail: action.payload.data,
          errorCommentDetail: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default comment;
  