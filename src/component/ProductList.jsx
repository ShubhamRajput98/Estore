import React from "react";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { useSelector } from "react-redux";
export const ProductList = () => {
  const { layOut, filterData } = useSelector((state) => state.products);

  if (layOut === true) {
    return <GridView products={filterData} />;
  }
  if (layOut === false) {
    return <ListView products={filterData} />;
  }
};
