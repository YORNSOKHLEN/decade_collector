import React from "react";
import Item from "./Item";
import Geats1 from "../../../assets/images/KamenRider/Geats/Geats1/Geats1.png";
import Tycoon2 from "../../../assets/images/KamenRider/Geats/Tycoon1/Tycoon2.png";

const GroupItem = () => {
  const ItemProduct = [
    {
      id: "G1",
      old_pic: Geats1,
      Detail: "DX Desire Driver",
      Price: "$85.00",
    },
    {
      id: "TC",
      old_pic: Tycoon2,
      Detail: "DX Bujin Sword Raise Buckle",
      Price: "$95.00",
    },
  ];
  return (
    <>
      {ItemProduct.map((p) => {
        return <Item itemProduct={p} key={p.id} />;
      })}
    </>
  );
};

export default GroupItem;
