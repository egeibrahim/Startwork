import {
  CREATE_PAGE,
  GET_OWN_PAGE,
  GET_PAGE_ID,
  GET_PAGE_TYPE,
} from "../actions/actionTypes";

const defaultState = {
  page: {},
};

const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_PAGE:
      return {
        page: { ...action.page },
      };
    case GET_OWN_PAGE:
      return {
        page: { ...action.page },
      };
    case GET_PAGE_ID:
      return {
        page: { ...action.page },
      };
    case GET_PAGE_TYPE:
      return {
        page: { ...action.page },
      };
    default:
      return state;
  }
};

export default pageReducer;
