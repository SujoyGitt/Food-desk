import React, { useEffect, useRef, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    src: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.ccf464248c38e8f0cca0.jpg",
    alt: "Slide 1",
  },
  {
    src: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-4.3bf12b6c16e4ffe32cec.jpg",
    alt: "Slide 2",
  },
  {
    src: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.a3a5f4d03926cf53a16d.jpg",
    alt: "Slide 3",
  },
];

const useStyles = makeStyles(() => ({
  root: {
    Width: 100,
    flexGrow: 1,
    overflow: "hidden",
  },
  img: {
    display: "block",
    overflow: "hidden",
    width: "100%",
    borderRadius: "10px",
  },
}));
const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  const handleOne = () => {
    setActiveStep(0);
  };
  const handleTwo = () => {
    setActiveStep(1);
  };
  const handleThree = () => {
    setActiveStep(2);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="banner h-68 w-full">
      <div className="banner-container h-full w-full  pl-5 relative">
        <div className="indicator w-8  left-0  absolute ">
          <div
            className={
              activeStep === maxSteps - 3
                ? "bannerindicator mt-3 bg-themeorange cursor-pointer rounded-full"
                : "bannerindicator mt-3 bg-themelightgray cursor-pointer rounded-full"
            }
            onClick={handleOne}
          ></div>
          <div
            className={
              activeStep === maxSteps - 2
                ? "bannerindicator mt-3 bg-themeorange cursor-pointer rounded-full"
                : "bannerindicator mt-3 bg-themelightgray cursor-pointer rounded-full"
            }
            onClick={handleTwo}
          ></div>
          <div
            className={
              activeStep === maxSteps - 1
                ? "bannerindicator mt-3 bg-themeorange cursor-pointer rounded-full"
                : "bannerindicator mt-3 bg-themelightgray cursor-pointer rounded-full"
            }
            onClick={handleThree}
          ></div>
        </div>
        <div className="banner-slider h-full  flex items-center justify-between">
          <div className={classes.root}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {slides.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.src}
                      alt={step.alt}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
