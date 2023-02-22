import React, { useReducer,useEffect } from "react";
import ProductContext from "./productContext";
import reducer from "./reducer";
import axios from "axios";

import {
  SEARCH_PRODUCT_SUCCESS,
  FILTER_PRODUCT_REQUEST,
  CLEAR_FILTER ,
} from "./types";

const baseURL = "https://fakestoreapi.com/products";

const initialState = {
  loading: true,
  products: [],
  filtered: null,
};

const ProductState = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

   // Filter Blogs
   const filterProduct = (text) => {
    dispatch({ type: FILTER_PRODUCT_REQUEST, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response.data);
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS,
        payload: response.data,
      });
    });
    console.log(state.products);
  }, []);

  return <ProductContext.Provider value={{
    products: state.products,
    filtered: state.filtered,
    filterProduct,
    clearFilter,
    loading: state.loading,
  }}>
    {props.children}
  </ProductContext.Provider>
};

export default ProductState;
