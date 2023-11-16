import React from 'react'
import { FoodApi } from "../../FoodApi";

const Category = () => {
  return (
    <div className="category w-full">
    <h3 className="text-lg font-semibold text-black opacity-80 my-4">
      Category
    </h3>
    <div className="category-container w-full overflow-hidden">
      <div className="category-slider w-full ">
        {FoodApi.categories.map((data, index) => {
          return (
            <>
              <div
                className="category-one border border-themelightgray flex justify-center items-center"
                key={index}
              >
                <div className="">
                  {data.svg}
                  <span className="text-sm">{data.name}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Category