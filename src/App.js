import React from "react";

import ProductState from "./context/ProductStates";

import Header from "./share/components/Header";
import Search from "./share/components/Search";
import ProductTable from "./share/components/ProductTable";

const App = () => {
  return (
    <>
      <ProductState>
        <Header />

        <main className="w-full h-screen mt-32">
          <div className="flex justify-center content-center mb-5">
            <h1 className="text-3xl font-bold">List Of Products</h1>
          </div>

          <Search />

          <ProductTable />
        </main>
      </ProductState>
    </>
  );
};

export default App;
