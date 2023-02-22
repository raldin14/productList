const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_PRODUCT_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null,
        };
      case "SEARCH_PRODUCT_SUCCESS":
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
    case "FILTER_PRODUCT_REQUEST":
    return  {...state,
        loading: false,products: action.payload.productList.filter((s) =>
    s.title.toLowerCase().includes(action.payload.query.toLowerCase()))};
      default:
        return state;
    }
  };

  export default reducer;