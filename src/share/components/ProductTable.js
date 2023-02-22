import React, { useContext } from "react";
import CardContent from "../UIElements/CardContent";
import ProductItems from "./ProductItems";
import ProductContext from "../../context/productContext";

const ProductTable = (props) => {
  const productContext = useContext(ProductContext);
  const { products, filtered, loading } = productContext;

  return (
    <>
      {loading ? (
        <span className="flex justify-center content-center mb-5">
          loading...
        </span>
      ) : (
        <CardContent title="Available Products">
          <table className="w-full">
            <thead>
              <tr className="bg-orange-300 text-white">
                <th className="text-center py-2 rounded-tl-lg">Image</th>
                <th className="text-center py-2">Product Name</th>
                <th className="text-center py-2 rounded-tr-lg">Price</th>
              </tr>
            </thead>
            <tbody>
              {filtered ? (
                <ProductItems products={filtered} />
              ) : (
                <ProductItems products={products} />
              )}
            </tbody>
          </table>
        </CardContent>
      )}
    </>
  );
};

export default ProductTable;
