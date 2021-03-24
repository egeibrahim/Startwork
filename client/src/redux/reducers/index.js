import userReducer from "./userReducer";
import postReducer from "./postReducer";
import settingsReducer from "./settingsReducer";
import pageReducer from "./pageReducer";
import applyReducer from "./applyReducer";
import jobReducer from "./jobReducer";
import advantageReducer from "./advantageReducer";
import searchReducer from "./searchReducer";
import eventReducer from "./eventReducer";
import commentReducer from "./commentReducer";
import conversationReducer from "./conversationReducer";

import { combineReducers } from "redux";

const reducer = combineReducers({
  userReducer,
  postReducer,
  settingsReducer,
  pageReducer,
  applyReducer,
  jobReducer,
  advantageReducer,
  searchReducer,
  eventReducer,
  commentReducer,
  conversationReducer,
});

export default reducer;
