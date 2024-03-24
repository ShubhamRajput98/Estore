import React, { useEffect } from "react";
import { FeatureProducts } from "../component/FeatureProducts";
import { HeroSection } from "../component/HeroSection";
import { Servises } from "../component/Servises";
import { Trusted } from "../component/Trusted";
import { GetProducts } from "../redux/actions";

export const Home = () => {
  useEffect(() => {
    GetProducts();
  }, []);

  const myData = {
    name: "E Store",
  };

  return (
    <>
      <HeroSection myData={myData} />
      <FeatureProducts />
      <Servises />
      <Trusted />
    </>
  );
};
