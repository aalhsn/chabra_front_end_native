//I'd rather import the specific types i need
import * as actionTypes from "../actions/types";

const initialState = {
  user: null,
  profile: null,
  profileLoading: true

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };

    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
        profileLoading: false

      };
    default:
      return state;
  }
};

export default reducer;
