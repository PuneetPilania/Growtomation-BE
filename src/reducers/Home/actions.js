import { SET_TICKETS, SET_CLIENT_SECRET } from "./constants";
import { httpPost } from "../../utils/http";
import { API_URLS } from "../../configs/api";
import { showErrorMsg } from "../../utils/notifications";

/**
 * Set tickets Info
 *
 * @param {Object} data
 */
export const fetchTickets = (email) => async (dispatch) => {
  try {
    let payload_data = {
      lead_email: email,
    };

    const response = await httpPost(API_URLS.FETCH_TICKETS, payload_data);

    if (response.status) {
      dispatch({
        type: SET_TICKETS,
        data: { tickets: response.tickets, email: email },
      });
    } else {
      showErrorMsg(response.message);
    }
  } catch (e) {
    // showErrorMsg();
  }
};

/**
 * Set tickets Info
 *
 * @param {Object} data
 */
export const createTkt = (email, subject, navigate) => async (dispatch) => {
  try {
    let payload_data = {
      lead_email: email,
      subject: subject,
    };

    const response = await httpPost(API_URLS.CREATE_TICKET, payload_data);
    console.log(response);

    if (response.status) {
    } else {
      showErrorMsg(response.message);

      dispatch({
        type: SET_CLIENT_SECRET,
        data: response.secret_token,
      });

      navigate.push("/payment");
    }
  } catch (e) {
    // showErrorMsg();
  }
};
