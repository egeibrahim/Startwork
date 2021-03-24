import axios from "axios";
import { SEARCH_TAG } from "./actionTypes";
import { url } from "../../url";

export const searchTag = (key) => async (dispatch) => {
  const tag = await axios.get(`${url}/api/search/${key}`);
  dispatch({ type: SEARCH_TAG, search: tag.data.data });
};
