import {
  CREATE_ADVANTAGE,
  GET_ALL_ADVANTAGE,
  GET_ADVANTAGE_ID,
} from "../actions/actionTypes";

const defaultState = {
  advantage: {},
};

const advantageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ADVANTAGE:
      return {
        advantage: { ...action.advantage },
      };
    case GET_ALL_ADVANTAGE:
      return {
        advantage: { ...action.advantage },
      };
    case GET_ADVANTAGE_ID:
      return {
        advantage: { ...action.advantage },
      };
    default:
      return state;
  }
};

export default advantageReducer;
