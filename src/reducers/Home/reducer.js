import { SET_TICKETS, SET_CLIENT_SECRET } from "./constants";

const initialState = {
  email: "",
  client_secret: "",
  tickets: {
    data: [],
    loading: true,
  },
};

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        email: action.data.email,
        tickets: {
          data: action.data.tickets,
          loading: false,
        },
      };

    case SET_CLIENT_SECRET:
      return {
        ...state,
        client_secret: action.data,
      };

    default:
      return state;
  }
}

export default HomeReducer;
