import React from "react";
import CardContent from "../UIElements/CardContent";
import ProductItems from "./ProductItems";

const ProductTable = props => {
    const {products} = props;

    return (
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
            <ProductItems products={products}/>
          </tbody>
        </table>
      </CardContent>
    );
};

export default ProductTable;