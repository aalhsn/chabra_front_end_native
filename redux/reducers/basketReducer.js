import * as actionTypes from "../actions/types";

const initialState = {
  items: []
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let newItem = action.payload;

      let checkItem = state.items.find(
        item =>
          item.name === newItem.name
          
      );
      if (checkItem) {
        checkItem.quantity++;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(newItem)
        };
      }

    case actionTypes.REMOVE_ITEM:
      let filteredItems = state.items.filter(item => item !== action.payload);
      return {
        ...state,
        items: filteredItems
      };

    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default basketReducer;