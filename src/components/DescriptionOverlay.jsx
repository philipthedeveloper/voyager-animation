import React from "react";
import styled from "styled-components";

const DescriptionOverlay = ({
  data: { title, subtitle, description },
  infoContainerRef,
  titleRef,
  subtitleRef,
  seperatorRef,
  descriptionRef,
}) => {
  return (
    <DescriptionContainer>
      <DescriptionInfo>
        <Container ref={infoContainerRef}>
          <DescriptionTitle ref={titleRef}>{title}</DescriptionTitle>
          <DescriptionSubtitle ref={subtitleRef}>
            <UnderScore></UnderScore>
            {subtitle}
          </DescriptionSubtitle>
          <Seperator ref={seperatorRef}></Seperator>
          <Description ref={descriptionRef}>{description}</Description>
        </Container>
      </DescriptionInfo>
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    black,
    rgba(0, 0, 0, 0.5),
    rgba(255, 255, 255, 0)
  );
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const DescriptionInfo = styled.div`
  min-width: 200px;
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  //   align-items: center;
  //   background-color: red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionTitle = styled.h1`
  text-transform: uppercase;
  font-size: 5rem;
  color: #fff;
  opacity: 0;
  animation: fromBottom 0.5s ease 0s normal forwards;

  &.fade-out {
    opacity: 1;
    animation: fade-out 0.5s ease 0s normal forwards;
  }
`;

const DescriptionSubtitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.2rem;
  color: #fff;
  margin-top: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  transform: translateY(80%);
  opacity: 0;
  animation: fromBottom 0.5s ease 0.4s normal forwards;

  &.fade-out {
    opacity: 1;
    animation: fade-out 0.5s ease 0.1s normal forwards;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #fff;
  transform: translateY(80%);
  opacity: 0;
  animation: fromBottom 0.5s ease 0.8s normal forwards;

  &.fade-out {
    opacity: 1;
    animation: fade-out 0.5s ease 0.2s normal forwards;
  }
`;

const UnderScore = styled.div`
  width: 60px;
  height: 10px;
  border-radius: 30px;
  background: #fff;
`;

const Seperator = styled.div`
  width: 150px;
  height: 6px;
  border-radius: 30px;
  background: #fff;
  margin: 1.5rem 0 2.5rem;
  transform: translateY(80%);
  opacity: 0;
  animation: fromBottom 0.5s ease 0.8s normal forwards;

  &.fade-out {
    opacity: 1;
    animation: fade-out 0.5s ease 0.2s normal forwards;
  }
`;
export default DescriptionOverlay;
