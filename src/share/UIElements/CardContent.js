import React from "react";

const CardContent = props => {
    return <div className="bg-white ring-1 ring-gray-900/5 mt-5 p-3 rounded-lg shadow-lg sm:mx-auto  sm:max-w-lg mb-10">
    <div>
      <h2 className="text-lg font-bold">{props.title}</h2>
    </div>
    <div className="mt-3">
      {props.children}
    </div>
  </div>
};

export default CardContent;