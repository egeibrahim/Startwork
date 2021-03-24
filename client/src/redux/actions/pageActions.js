import axios from "axios";
import {
  CREATE_PAGE,
  GET_OWN_PAGE,
  GET_PAGE_ID,
  GET_PAGE_TYPE,
} from "./actionTypes";
import { url } from "../../url";

export const createPage = (content) => async (dispatch) => {
  try {
    const page = await axios.post(`${url}/api/page/create`, content);
    dispatch({ type: CREATE_PAGE, page: page.data.data });
  } catch (e) {}
};

export const getOwnPage = () => async (dispatch) => {
  const page = await axios.get(`${url}/api/page/own`);
  dispatch({ type: GET_OWN_PAGE, page: page.data.data });
};

export const getPageById = (id) => async (dispatch) => {
  const page = await axios.get(`${url}/api/page/page/${id}`);
  dispatch({ type: GET_PAGE_ID, page: page.data.data });
};

export const getPageByType = (type) => async (dispatch) => {
  const page = await axios.get(`${url}/api/page/page/type/${type}`);
  dispatch({ type: GET_PAGE_TYPE, page: page.data.data });
};
