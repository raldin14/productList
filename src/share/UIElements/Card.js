import React from "react";

const Card = props =>{
   return (
     <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-2xl sm:px-10">
       <div className="mx-auto max-w-md">
         {props.children}
       </div>
     </div>
   );
};

export default Card;