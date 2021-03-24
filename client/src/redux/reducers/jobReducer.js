import { CREATE_JOB, GET_JOB } from "../actions/actionTypes";

const defaultState = {
  job: {},
};

const jobReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_JOB:
      return {
        job: { ...action.job },
      };
    case GET_JOB:
      return {
        job: { ...action.job },
      };
    default:
      return state;
  }
};

export default jobReducer;
