import { CREATE_APPLY, GET_APPLY } from "../actions/actionTypes";

const defaultState = {
  apply: {},
};

const applyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_APPLY:
      return {
        apply: { ...action.apply },
      };
    case GET_APPLY:
      return {
        apply: { ...action.apply },
      };
    default:
      return state;
  }
};

export default applyReducer;
