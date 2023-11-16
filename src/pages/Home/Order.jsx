import React from "react";
import { FoodApi } from "../../FoodApi";
const Order = () => {
  return (
    <div className="order w-full">
      <h3 className="text-lg font-semibold text-black  opacity-80 my-4">
        Recent Order
      </h3>
      <div className="order-container w-full overflow-hidden">
        <div className="order-slider w-full flex justify-between items-center">
          {FoodApi.foods.reverse().slice(6,10).map(data=>{
            return <div className="order-card hover:border-themeorange overflow-hidden relative border border-themelightgray rounded-lg">
            <div className="order-header flex justify-between items-center">
              <div className="favarite text-lg absolute top-2 right-3">
                <i class="fa-solid fa-heart ms-auto c-heart c-pointer text-themegray"></i>
              </div>
            </div>
            <div className="order-img w-32 h-32 mx-auto my-5 mt-8">
              <img
                className="w-full h-full"
                src={data.image}
                alt=""
              />
            </div>
            <div className="order-name text-center font-semibold opacity-80">
              {data.name}
            </div>
            <div className="order-footer text-center">
              <div className="price text-2xl font-bold text-themeorange">
                ${data.name}
              </div>
            </div>
            <div className="delivery-time my-2 pb-3 text-center text-sm text-themegray">
              4.97 km <span>.</span> 21min
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Order;
