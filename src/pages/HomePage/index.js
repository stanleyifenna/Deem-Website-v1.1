import React from "react";
import HomeSection from "../../components/Home/HomeSection";
import HomeSection2 from "../../components/Home/HomeSection2";
import HomeSection3 from "../../components/Home/HomeSection3";
import HomeSection4 from "../../components/Home/HomeSection4";
import HomeSection5 from "../../components/Home/HomeSection5";
import HomeSection6 from "../../components/Home/HomeSection6";
import HomeSection7 from "../../components/Home/HomeSection7";
import HomeSection8 from "../../components/Home/HomeSection8";
import Routes from "../../Routes";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
} from "./Data";



const Home = () => {
  return (
    <Routes>
      <HomeSection {...homeObjOne} />
      <HomeSection2 {...homeObjTwo} />
      <HomeSection3 {...homeObjThree} />
      <HomeSection4 {...homeObjFour} />
      <HomeSection5 {...homeObjFive} />
      <HomeSection6 {...homeObjSix} />
      <HomeSection7 {...homeObjSeven} />
      <HomeSection8 />

     
    </Routes>
  );
};

export default Home;
