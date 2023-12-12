import React from "react";
import { FoodApi } from "../../FoodApi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";
const Category = () => {
  // carousel responsive
  const responsive = {
    300: {
      items: 2, // Display one item on screens smaller than 0px
    },
    576: {
      items: 3, // Display two items on screens between 768px and 1024px
    },
    1024: {
      items: 3, // Display three items on screens larger than 1024px
    },
  };
  return (
    <div className="category w-full">
      <div className="dishes-header flex items-center justify-between my-3 ml-5">
        <h3 className="text-lg font-semibold text-black opacity-80 ">
          Category
        </h3>
        <NavLink className="text-themeorange text-xs" to="/food-menu">
          View all
          <i class="fas fa-chevron-down -rotate-90 ml-0.5 text-themeorange text-sm"></i>
        </NavLink>
      </div>
      <div className="category-container w-full overflow-hidden">
        <div className="category-slider w-full ">
          <OwlCarousel
            autoplay={true}
            autoplayTimeout={2000}
            loop={true}
            smartSpeed={1000}
            responsive={responsive}
          >
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
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Category;
