import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./index";

export default function store() {
  return createStore(reducer, applyMiddleware(thunk));
}
