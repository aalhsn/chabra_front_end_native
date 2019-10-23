import { SET_ERRORS } from "../actions/types";

const initialState = {
  errors: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: Object.keys(action.payload).map(
          key => `${key}: ${action.payload[key]}`
        )
      };
    default:
      return state;
  }
};

export default reducer;
