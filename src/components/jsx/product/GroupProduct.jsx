import React from "react";
import Product from "./Product";
import DataProduct from "../../js/dataProduct";

const GroupProduct = () => {
  return (
    <div className=" mx-7 lg:mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 md:gap-5 lg:gap-10 -z-10 mt-5 ">
      {DataProduct.map((p) => {
        return <Product {...p} key={p.id} />;
      })}
    </div>
  );
};

export default GroupProduct;
