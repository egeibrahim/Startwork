import axios from "axios";
import { CREATE_EVENT, GET_ALL_EVENTS, GET_ID_EVENT } from "./actionTypes";
import { url } from "../../url";

export const createEvent = (content) => async (dispatch) => {
  try {
    if (content.profile_image !== "") {
      const formData = new FormData();
      formData.append("profile_image", content.profile_image);
      formData.set("eventName", content.eventName);
      formData.set("eventLocation", content.eventLocation);
      formData.set("eventType", content.eventType);
      formData.set("eventStarts", content.eventStarts);
      formData.set("eventEnds", content.eventEnds);
      formData.set("about", content.about);
      formData.set("isPaid", content.isPaid);

      const event = await axios.post(`${url}/api/event/create`, formData);
      dispatch({ type: CREATE_EVENT, event: event.data.data });
    } else {
      const event = await axios.post(`${url}/api/event/create`, content);
      dispatch({ type: CREATE_EVENT, event: event.data.data });
    }
  } catch (e) {}
};

export const getAllEvents = () => async (dispatch) => {
  const event = await axios.get(`${url}/api/event`);
  dispatch({ type: GET_ALL_EVENTS, event: event.data.data });
};

export const getEventId = (id) => async (dispatch) => {
  const event = await axios.get(`${url}/api/event/${id}`);

  dispatch({ type: GET_ID_EVENT, event: event.data.data });
};
