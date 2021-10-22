import React from "react";
import styled from "styled-components";
import { FeatureAccordion1 } from "./FeatureAccordon";

const TrelloFeature = ({ Ch, Ct, Cd, Acc, FImg, Tt }) => {
  return (
    <Container>
      <Wrapper Fd={Tt}>
        <FeatureImg src={FImg} />
        <FeatureContent>
          <ContentHead>{Ch}</ContentHead>
          <ContentTitle>{Ct}</ContentTitle>
          <ContentDesc>{Cd}</ContentDesc>
          {Acc}
        </FeatureContent>
      </Wrapper>
    </Container>
  );
};

export default TrelloFeature;

const ContentHead = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin: 10px 0;
`;
const ContentTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
`;
const ContentDesc = styled.div`
  width: 570px;
  font-size: 20px;
  margin: 10px 0;
  line-height: 1.2;
  opacity: 0.4;
  letter-spacing: ;
`;
const FeatureContent = styled.div`
  width: 650px;
  color: #091e42;
  margin: 0 20px;
`;
const FeatureImg = styled.img`
  width: 400px;
  margin: 0 20px;
  object-fit: cover;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ Fd }) => (Fd ? "row-reverse" : "row")};
  margin: 20px 0;
`;
const Container = styled.div`
  width: 100%;
  background: whitesmoke;
  padding-top: 70px;
`;
