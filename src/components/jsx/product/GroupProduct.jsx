import React from "react";
import Product from "./Product";
import DataProduct from "../../js/dataProduct";

const GroupProduct = () => {
  return (
    <div className=" mx-7 grid grid-cols-4 gap-10 -z-10 px-10 ">
      {DataProduct.map((p) => {
        return <Product {...p} key={p.id} />;
      })}
    </div>
  );
};

export default GroupProduct;
