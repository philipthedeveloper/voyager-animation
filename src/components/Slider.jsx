import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import imageOne from "../assets/images/641039.jpg";
import imageTwo from "../assets/images/back3.jpg";
import imageThree from "../assets/images/Blue Street.jpg";

const Slider = ({ moveLeft, moveRight, currentIndex, direction }) => {
  const leftDirectionIconRef = useRef();
  const rightDirectionIconRef = useRef();
  const currentLeft = useRef();
  const currentCenter = useRef();
  const currentRight = useRef();

  useEffect(() => {
    if (direction && direction === "left") {
      let tempHolder = currentLeft.current;
      currentLeft.current.style.zIndex = -1;
      currentLeft.current.style.transition = "transform 1s ease";
      currentCenter.current.style.zIndex = 100;
      currentRight.current.style.zIndex = 100;

      // CHANGE CENTER TO LEFT
      currentLeft.current = currentCenter.current;
      currentLeft.current.classList.remove("center");
      currentLeft.current.classList.add("left");

      // CHANGE RIGHT TO CENTER;
      currentCenter.current = currentRight.current;
      currentCenter.current.classList.remove("right");
      currentCenter.current.classList.add("center");

      // CHANGE LEFT TO RIGHT;
      currentRight.current = tempHolder;
      currentRight.current.classList.remove("left");
      currentRight.current.classList.add("right");
    } else if (direction && direction === "right") {
      let tempHolder = currentRight.current;
      currentRight.current.style.zIndex = -1;
      currentRight.current.style.transition = "transform 1s ease";
      currentCenter.current.style.zIndex = 100;
      currentLeft.current.style.zIndex = 100;

      // CHANGE CENTER TO RIGHT;
      currentRight.current = currentCenter.current;
      currentRight.current.classList.remove("center");
      currentRight.current.classList.add("right");

      // CHANGE LEFT TO CENTER;
      currentCenter.current = currentLeft.current;
      currentCenter.current.classList.remove("left");
      currentCenter.current.classList.add("center");

      // CHANGE RIGHT TO LEFT;
      currentLeft.current = tempHolder;
      currentLeft.current.classList.remove("right");
      currentLeft.current.classList.add("left");
    }

    leftDirectionIconRef.current &&
      leftDirectionIconRef.current.addEventListener("click", moveLeft);
    rightDirectionIconRef.current &&
      rightDirectionIconRef.current.addEventListener("click", moveRight);

    return () => {
      leftDirectionIconRef.current &&
        leftDirectionIconRef.current.removeEventListener("click", moveLeft);
      rightDirectionIconRef.current &&
        rightDirectionIconRef.current.removeEventListener("click", moveRight);
    };
  }, [currentIndex]);

  return (
    <Container>
      <DirectionContainer left={true}>
        <i class="fi fi-rr-arrow-small-left" ref={leftDirectionIconRef}></i>
      </DirectionContainer>
      <CardContainer>
        <Card bgc="pink" className="left" ref={currentLeft}>
          <Image src={imageOne} />
        </Card>
        <Card bgc="yellow" className="center" ref={currentCenter}>
          <Image src={imageTwo} />
        </Card>
        <Card bgc="brown" className="right" ref={currentRight}>
          <Image src={imageThree} />
        </Card>
      </CardContainer>
      <DirectionContainer right={true}>
        <i
          className="fi fi-rr-arrow-small-right"
          ref={rightDirectionIconRef}
        ></i>
      </DirectionContainer>
    </Container>
  );
};

const Container = styled.div`
  //   width: 80%;
  width: 900px;
  max-width: 1000px;
  height: 80%;
  max-height: 700px;
  margin: auto;
  //   background: red;
  position: relative;
`;

const DirectionContainer = styled.div`
  position: absolute;
  z-index: 150;
  //   background: blue;
  height: 100%;
  ${(props) =>
    props?.left
      ? "left: 0%; justify-content: flex-start; top: 0;"
      : "right: 0%; justify-content: flex-end; top: 0;"}
  display: flex;
  align-items: center;
  //   justify-content: center;

  i {
    font-size: 4rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  //   background: green;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   transform-style: preserve-3d;
  perspective: 1000px;
`;
const Card = styled.div`
  width: 40%;
  height: 90%;
  background-color: ${(props) => props.bgc};
  transform-style: preserve-3d;
  transition: transform 1s ease;
  //   transition-delay: 0.8s;
  position: absolute;
  left: 0%;

  &.center {
    // left: 50%;
    transform: translateX(calc(450px - 50%)) rotateY(0deg);
  }

  &.left {
    width: 28%;
    transform: translateX(0) rotateY(35deg);
    transform-origin: right;
    height: 75%;
    // left: 0;
    // z-index: 0;
    // order: 5;
  }

  &.right {
    width: 28%;
    transform-origin: left;
    // transform-origin: right;
    transform: translateX(calc(900px - 100%)) rotateY(-35deg);
    height: 75%;
    // left: 72%;
    // z-index: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default Slider;
