import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import sliderData from "./data/slider-data";
import DescriptionOverlay from "./components/DescriptionOverlay";
import Slider from "./components/Slider";
import imageOne from "./assets/images/back3.jpg";
import imageTwo from "./assets/images/641039.jpg";
import imageThree from "./assets/images/Blue Street.jpg";

const IMGURL = [imageOne, imageTwo, imageThree];

const App = () => {
  // let currentIndex = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [justRendered, setJustRendered] = useState(true);
  const [direction, setDirection] = useState("");
  const [currentData, setCurrentData] = useState(
    () => sliderData[currentIndex]
  );
  const infoContainerRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const seperatorRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    console.log("Called useEffect", currentIndex);
    if (justRendered) {
      setJustRendered(false);
      return;
    }
    if (infoContainerRef.current) {
      let currents = [
        titleRef.current,
        subtitleRef.current,
        seperatorRef.current,
        descriptionRef.current,
      ];
      currents.forEach((el) => {
        if (el) {
          el.classList.add("fade-out");
        }
      });

      let displayTmo = setTimeout(() => {
        currents.forEach((el) => {
          if (el) {
            el.classList.remove("fade-out");
          }
        });
        setCurrentData(sliderData[currentIndex]);
        clearTimeout(displayTmo);
      }, 800);
      // infoContainerRef.current.style.display = "none";

      // let displayTmo = setTimeout(() => {
      //   infoContainerRef.current.style.display = "block";
      //   clearTimeout(displayTmo);
      // }, 100);
    }
  }, [currentIndex]);

  const moveRight = (e) => {
    console.log("Called", currentIndex);
    setDirection("right");
    if (currentIndex === 2) return setCurrentIndex(0);
    return setCurrentIndex((prev) => prev + 1);
  };

  const moveLeft = (e) => {
    console.log("Called", currentIndex);
    setDirection("left");
    if (currentIndex === 0) return setCurrentIndex(2);
    return setCurrentIndex((prev) => prev - 1);
  };

  return (
    <Container className="App" currentIndex={currentIndex}>
      <Slider
        moveLeft={moveLeft}
        moveRight={moveRight}
        currentIndex={currentIndex}
        direction={direction}
      />
      <DescriptionOverlay
        data={currentData}
        infoContainerRef={infoContainerRef}
        titleRef={titleRef}
        subtitleRef={subtitleRef}
        seperatorRef={seperatorRef}
        descriptionRef={descriptionRef}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url("${(props) => IMGURL[props.currentIndex]}");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    opacity: 0.8;
    position: absolute;
  }
`;
export default App;
