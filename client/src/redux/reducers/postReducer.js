import { GET_POST, CREATE_POST } from "../actions/actionTypes";

const defaultState = {
  post: {},
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        post: { ...action.post },
      };
    case CREATE_POST:
      return {
        post: { ...action.post },
      };
    default:
      return state;
  }
};

export default postReducer;
