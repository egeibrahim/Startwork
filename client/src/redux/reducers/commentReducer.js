import { CREATE_COMMENT } from "../actions/actionTypes";

const defaultState = {
  comment: {},
};

const commentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        comment: { ...action.comment },
      };
    default:
      return state;
  }
};

export default commentReducer;
