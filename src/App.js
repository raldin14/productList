import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "./context/reducer";

import Header from "./share/components/Header";
import Search from "./share/components/Search";
import ProductTable from "./share/components/ProductTable";

const baseURL = "https://fakestoreapi.com/products";

const initialState = {
  loading: true,
  products: [],
  errorMessage: null,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, errorMessage, loading } = state;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      dispatch({
        type: "SEARCH_PRODUCT_SUCCESS",
        payload: response.data,
      });
    });
  }, []);

  const handlersearch = (searchValue) => {

    dispatch({
      type: "FILTER_PRODUCT_REQUEST",
      payload: { productList: products, query: searchValue },
    });
  };

  return (
    <>
      <Header />

      <main className="w-full h-screen mt-32">
        <div className="flex justify-center content-center mb-5">
          <h1 className="text-3xl font-bold">List Of Products</h1>
        </div>

        <Search handlersearch={handlersearch} />

        {loading ? (
          <span className="flex justify-center content-center mb-5">loading...</span>
        ) : (
          <ProductTable products={products} />
        )}
      </main>
    </>
  );
};

export default App;
