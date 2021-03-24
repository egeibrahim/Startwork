import { SEARCH_TAG } from "../actions/actionTypes";

const defaultState = {
  search: {},
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_TAG:
      return {
        search: { ...action.search },
      };
    default:
      return state;
  }
};

export default searchReducer;
