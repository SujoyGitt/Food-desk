import React from "react";
import "./Foodmenu.scss";
import { FoodApi } from "../../FoodApi";
import { NavLink, useNavigate } from "react-router-dom";
let apis = FoodApi.foods.reverse();
const Foodmenu = ({ pagesize }) => {
  console.log(pagesize[0])
  let navigate = useNavigate();
  return (
    <div className="food-menu ml-auto  mt-28 pb-12">
      <div className="food-menu-container pl-14 pr-8  pt-5 border-b border-themegray pb-5">
        <div className="food-menu-header  flex justify-between items-center">
          <div className="search-bar flex items-center border border-themelightgray py-2.5  rounded-md">
            <svg
              class=" mx-4"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                fill="#fc8019"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="What do you want to eat today..."
              className="w-64 border-none outline-none text-themegray text-sm"
            />
          </div>
          <div className="view">
            <ul className="flex items-center justify-end">
              <li>listview</li>
              <li>gridview</li>
            </ul>
          </div>
        </div>
        <div className="food-menu-filter my-7">
          <ul className="flex items-center">
            <li>
              <NavLink className="text-sm border rounded-md px-3 py-2.5 font-light text-themegray">
                All
              </NavLink>
            </li>
            <li>
              <NavLink className="text-sm border rounded-md px-3 py-2.5 font-light text-themegray ml-4">
                Exclusive
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center text-sm border rounded-md px-3 py-2.5 font-light text-themegray ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#9C9C9C"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iwHbVQ mr-3"
                >
                  <title>filter</title>
                  <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
                </svg>
                Price Low to High
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center text-sm border rounded-md p-3 font-light text-themegray ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#9C9C9C"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iwHbVQ mr-3"
                >
                  <title>filter</title>
                  <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
                </svg>
                Price Hight to Low
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="food-menu-card-container w-full flex justify-between items-center flex-wrap">
          {apis.slice(pagesize[0], pagesize[1]).map((e, key) => {
            return (
              <div
                className="food-menu-card relative p-4 border rounded-md hover:border-themeorange"
                key={key}
              >
                <div className="favourite absolute top-4 right-5">
                  <i class="fa-solid fa-heart ms-auto c-heart c-pointer text-lg text-themegray"></i>
                </div>
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-48 h-48  m-auto"
                />
                <h3 className="my-2 opacity-70 font-semibold">Big Bite</h3>
                <div className="rating-review flex items-center w-full border-b border-themegray pb-3">
                  <svg
                    className="mr-2"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z"
                      fill="#FC8019"
                    ></path>
                  </svg>
                  <span className="text-xs text-themegray">5.0</span>
                  <svg
                    class="mx-2"
                    width="4"
                    height="5"
                    viewBox="0 0 4 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4"></circle>
                  </svg>
                  <span className="text-xs text-themegray">1k+ Reviews</span>
                  <svg
                    class="mx-2"
                    width="4"
                    height="5"
                    viewBox="0 0 4 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4"></circle>
                  </svg>
                  <span className="text-xs text-themegray">2.97km</span>
                </div>
                <h3 className="text-base opacity-80 mt-1 font-semibold">
                  {e.name}
                </h3>
                <h2 className="font-semibold text-2xl text-themeorange">
                  ${e.price}
                </h2>
                <div className="addtocart absolute bottom-4 right-5 bg-themeorange p-2.5 rounded-md">
                  <img
                    src="https://fooddesk.dexignlab.com/xhtml/images/banner-img/plus.png"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="navigator w-full flex items-center justify-between">
          <h4 className="text-sm text-themegray">Showing {pagesize[0] }-{pagesize[1]} from {apis.length} data</h4>
          <div className="number">
            <span className="inline-block rounded-md  text-center hover:text-white">
              <i class="fas fa-chevron-down  rotate-90 text-xs "></i>
            </span>
            <span
              onClick={() => navigate("/food-menu")}
              className={
                pagesize[0] === 0
                  ? "inline-block rounded-md  bg-themeorange text-white text-center"
                  : "inline-block rounded-md  bg-themeloworange text-themelightgray text-center"
              }
            >
              1
            </span>
            <span
              className={
                pagesize[0] === 7
                  ? "inline-block rounded-md  bg-themeorange text-white text-center"
                  : "inline-block rounded-md  bg-themeloworange text-themegray text-center"
              }
              onClick={() => navigate("/food-menu/page-2")}
            >
              2
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-themegray m-auto text-center pt-4">Copyright © Designed & Developed by <span className="text-themeorange">DexignLab</span> 2023</p>
    </div>
  );
};

export default Foodmenu;
