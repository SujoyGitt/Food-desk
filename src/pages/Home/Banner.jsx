import React from 'react'

const Banner = () => {
  return (
    <div className="banner h-68 w-full">
            <div className="banner-container h-full w-full rounded-lg pl-5 overflow-hidden relative">
              <div className="indicator w-8  left-0  absolute ">
                <div className="bannerindicator mt-3 bg-themelightgray  rounded-full"></div>
                <div className="bannerindicator mt-3 bg-themelightgray  rounded-full"></div>
                <div className="bannerindicator mt-3 bg-themelightgray  rounded-full"></div>
              </div>
              <div className="banner-slider h-full  flex items-center justify-between">
                <img
                  src="https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.ccf464248c38e8f0cca0.jpg"
                  alt="one"
                  className="bg-gray-300 h-full min-w-full rounded-lg"
                />
                <img
                  src="https://fooddesk.dexignlab.com/react/demo/static/media/pic-4.3bf12b6c16e4ffe32cec.jpg"
                  alt="two"
                  className="bg-gray-300 h-full min-w-full rounded-lg"
                />
                <img
                  src="https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.a3a5f4d03926cf53a16d.jpg"
                  alt="three"
                  className="bg-gray-300 h-full min-w-full rounded-lg"
                />
              </div>
            </div>
          </div>
  )
}

export default Banner