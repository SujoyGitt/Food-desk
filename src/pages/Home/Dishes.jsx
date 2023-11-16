import React, { useState } from "react";
import { FoodApi } from "../../FoodApi";
import { NavLink } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
const Dishes = () => {
  const [wiseList, setwiseList] = useState(false);
  const [cart, setcart] = useState(false);
  return (
    <div className="Dishes w-full">
      <div className="dishes-header flex items-center justify-between">
        <h3 className="text-lg font-semibold text-black opacity-80 my-4">
          Popular Dishes
        </h3>
        <NavLink className="text-themeorange text-sm" to="/food-menu">
          View all
          <i class="fas fa-chevron-down -rotate-90 ml-0.5 text-themeorange text-sm"></i>
        </NavLink>
      </div>
      <div className="dishes-container w-full overflow-hidden">
        <div className="dishes-slider w-full flex justify-between items-center">
          {FoodApi.foods
            .slice(0, 6)
            .reverse()
            .map((data) => {
              return (
                <div
                  className={
                    data.offer === "Exclusive"
                      ? "dishes-card overflow-hidden relative border border-themeorange rounded-lg"
                      : "dishes-card overflow-hidden relative border border-themelightgray rounded-lg"
                  }
                >
                  <div className="card-header flex justify-between items-center">
                    <div
                      className={
                        data.offer === "Exclusive"
                          ? "offer py-1 px-4  bg-themeorange text-white text-sm absolute top-0 left-0"
                          : "offer py-1 px-4  bg-themered text-white text-sm absolute top-0 left-0"
                      }
                    >
                      {data.offer}
                    </div>
                    <div className="favarite text-lg absolute top-2 right-3">
                      <Tooltip title="Add to Wiselist" active>
                        {data.offer === "Exclusive" ? (
                          <i className="fa-solid fa-heart ms-auto c-heart c-pointer text-themeorange"></i>
                        ) : (
                          <i className="fa-solid fa-heart ms-auto c-heart c-pointer text-themegray"></i>
                        )}
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card-img w-32 h-32 mx-auto my-5 mt-12">
                    <img className="w-full h-full" src={data.image} alt="" />
                  </div>
                  <div className="card-star ml-4 my-1 flex items-center">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                        fill="#FC8019"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                        fill="#FC8019"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                        fill="#FC8019"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                        fill="#FC8019"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                        fill="#c8c8c8"
                      ></path>
                    </svg>
                  </div>
                  <div className="card-name ml-4 my-1 font-semibold opacity-80">
                    {data.name}
                  </div>
                  <div className="card-footer mx-4 my-1 mb-4 flex justify-between items-center">
                    <div className="price text-2xl font-bold text-themeorange">
                      ${data.price}
                    </div>
                    <div
                      className="add p-2 bg-themeorange rounded-md text-white text-2xl"
                      onClick={() => setcart(!cart)}
                    >
                      <Tooltip title="Add To Cart">
                       
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        
                       
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dishes;
