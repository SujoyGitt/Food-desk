import React from "react";
import "./Home.scss";
import Banner from "./Banner";
import Category from "./Category";
import Dishes from "./Dishes";
import Order from "./Order";
import Payment from "./Payment";
const Home = ({sidebartoggle}) => {
  return (
    <>
      <div className={sidebartoggle?"Home flex  justify-between right-0 mt-28 p-2 md:p-8 absolute bg-white":"Home flex w-full justify-between right-0 mt-28 p-2 md:p-8 absolute bg-white"}>
        <div className="sliderSection min-h-full">
          <Banner />
          <Category />
          <Dishes />
          <Order />
        </div>
        <Payment/>
        <div className="underline w-full border-b border-themelightgray mt-8"></div>
        <p className="text-xs text-themegray m-auto  my-3">Copyright © Designed by <span className="text-themeorange">DexignLab</span> 2023</p>
      </div>
     
    </>
  );
};

export default Home;