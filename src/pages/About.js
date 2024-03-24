import { HeroSection } from "../component/HeroSection";

export const About = () => {
  const myData = {
    name: "E-commers",
  };
  return (
    <>
      <HeroSection myData={myData} />
    </>
  );
};
