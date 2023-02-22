import {
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  FILTER_PRODUCT_REQUEST,
  CLEAR_FILTER,
} from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        filtered: null,
      };
    case SEARCH_PRODUCT_SUCCESS:      
      return {
        ...state,
        loading: false,
        products: action.payload,
        filtered: null,
      };
    case FILTER_PRODUCT_REQUEST:
      console.log(state, action.payload,"filtering");
      return {
        ...state,
        loading: false,
        filtered: state.products.filter((s) =>
          s.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default reducer;
