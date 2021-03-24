import {
  GET_MENTOR_SETTINGS,
  CREATE_MENTOR_SETTINGS,
  GET_INVESTOR_SETTINGS,
  CREATE_INVESTOR_SETTINGS,
} from "../actions/actionTypes";

const defaultState = {
  mentor: {},
  investor: {},
};

const settingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MENTOR_SETTINGS:
      return {
        mentor: { ...action.mentor },
        investor: {},
      };
    case CREATE_MENTOR_SETTINGS:
      return {
        mentor: { ...action.mentor },
        investor: {},
      };
    case GET_INVESTOR_SETTINGS:
      return {
        mentor: {},
        investor: { ...action.investor },
      };
    case CREATE_INVESTOR_SETTINGS:
      return {
        mentor: {},
        investor: { ...action.investor },
      };
    default:
      return state;
  }
};

export default settingsReducer;
