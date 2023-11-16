import React, { useState } from "react";
import "./Sidebar.scss";
import img from "./Screenshot_4.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebartoggle, setsidebartoggle }) => {
  const [showAccordion, setshowAccordion] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={
          sidebartoggle
            ? "roundShape toggleaddleftround fixed top-20"
            : "roundShape fixed top-20"
        }
      ></div>
      <div
        className={
          !sidebartoggle
            ? "sidebar px-3 py-6 top-20 bg-white border-r z-10 border-themelightgray"
            : "sidebar px-3 py-6 top-20 toggleadd bg-white border-r z-10 border-themelightgray"
        }
      >
        <ul>
          <li className="text-themeorange text-xs px-5 mb-5">Main Menu</li>
          <li className=" py-0.5  cursor-pointer" onClick={()=>setshowAccordion(!showAccordion)}>
            <div className={!showAccordion?"head  px-5 flex justify-between items-center bg-themeorange  rounded-lg":"head  px-5 flex justify-between items-center rounded-lg"}>
              <div className="">
                <i class={showAccordion?"bi bi-grid text-lg text-themegray mb-2":"bi bi-grid text-lg text-white mb-2"}></i>
                <span className={showAccordion?"inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange":"inline-block text-white text-sm font-medium p-4"}>
                  Dashboard
                </span>
              </div>
              <span>
                <i class={showAccordion?"header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90":"header-select-icon mt-1 fa-solid fa-sort-down text-white"}></i>
              </span>
            </div>
            <ul className={showAccordion?"w-full  h-0 overflow-hidden":"w-full mt-5 h-44"}>
              <li className="w-full flex items-center justify-start pl-8 pb-4" onClick={()=>navigate('/')}>
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70" ></div>
                <span className="text-sm pl-4 text-themegray">Food Order</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4" onClick={()=>navigate('/food-menu')}>
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Food Menu</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4" onClick={()=>navigate('/food-menu')}>
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Menu</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Message</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Message</span>
              </li>
            </ul>
          </li>
          
          <li className=" py-0.5  cursor-pointer">
            <div className="head flex justify-between items-center">
              <div className="">
                <i class="bi bi-shop-window text-lg text-themegray mb-3"></i>
                <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                  Restaurent
                </span>
              </div>
              <span>
                <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
              </span>
            </div>
            <ul className="w-full">
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Restaurent</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Menu</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Orders</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Reviews</span>
              </li>
            </ul>
          </li>
          <li className=" py-0.5  cursor-pointer">
            <div className="head flex justify-between items-center">
              <div className="">
                <i class="bi bi-grid text-lg text-themegray mb-2"></i>
                <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                  Dashboard
                </span>
              </div>
              <span>
                <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
              </span>
            </div>
            <ul className="w-full">
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Dashboard</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Orders</span>
              </li>
              <li className="w-full flex items-center justify-start pl-8 pb-4">
                <div className="w-1.5 h-0.5 bg-themeorange opacity-70"></div>
                <span className="text-sm pl-4 text-themegray">Feedback</span>
              </li>
            </ul>
          </li>
          <li className="text-themeorange text-xs my-5">Other</li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-info-circle text-themegray text-lg"></i>
              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Apps
              </span>
            </div>
            <span>
              <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
            </span>
          </li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-pie-chart text-themegray text-lg"></i>
              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Charts
              </span>
            </div>
            <span>
              <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
            </span>
          </li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-star text-themegray text-lg"></i>

              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Tailwind
              </span>
            </div>
            <span>
              <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
            </span>
          </li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-heart text-themegray text-lg"></i>
              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Plugins
              </span>
            </div>
            <span>
              <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
            </span>
          </li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-gear-wide text-themegray text-lg"></i>
              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Widget
              </span>
            </div>
          </li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-file-earmark-check text-themegray text-lg"></i>
              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Forms
              </span>
            </div>
            <span>
              <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
            </span>
          </li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-file-earmark-spreadsheet text-themegray text-lg"></i>
              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Table
              </span>
            </div>
            <span>
              <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
            </span>
          </li>
          <li className="flex px-5 justify-between items-center py-0.5  cursor-pointer">
            <div className="">
              <i class="bi bi-file-earmark-break text-themegray text-lg"></i>
              <span className="inline-block text-themegray text-sm font-medium p-4 hover:text-themeorange">
                Pages
              </span>
            </div>
            <span>
              <i class="header-select-icon mt-1 fa-solid fa-sort-down text-themelightgray -rotate-90"></i>
            </span>
          </li>
        </ul>
        <img src={img} alt="" className="w-full object-cover" />
        <h4 className="text-xs font-bold px-4 text-themegray my-2 mt-4">
          Food Desk - Online Food Delivery Admin Dashboard
        </h4>
        <p className="text-xs text-themegray px-4">© 2022 All Rights Reserved</p>
        <div className="sidebarFooter text-xs px-4 text-themegray my-3">
          Made with by <span className="heart"></span> DexignLab
        </div>
      </div>
    </>
  );
};

export default Sidebar;
