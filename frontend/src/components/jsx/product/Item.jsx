import React from "react";

const Item = ({ itemProduct: { old_pic, Detail, Price } }) => {
  return (
    <div className="mb-4 flex items-center justify-between mx-5">
      <div>
        <span>{Detail}</span>
        <img
          src={old_pic}
          alt="Black Image"
          className="w-[80px] h-[80px] mr-4"
        />
      </div>
      <div className="justify-items-center">
        <p className="text-sm text-white">{Price}</p>
      </div>
    </div>
  );
};

export default Item;
