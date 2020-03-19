import { SET_NEW_STATUS } from "./actions";

const initialState = {
  code: 0,
  message: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_STATUS: {
      return {
        ...state,
        code: payload.status,
        message: payload.data.message
      };
    }
    default:
      return state;
  }
};
