import React from "react";

const ProductItems = props => {
    return props.products.map((product, index) => (
      <tr key={index.toString()}>
        <td className="py-2 place-content-center">
          <img className="object-scale-down h-20 w-20" src={product.image} alt={product.title}/>
        </td>
        <td className="py-2 text-left">{product.title}</td>
        <td className="py-2 text-center">${product.price}</td>
      </tr>
    ));
};

export default ProductItems;