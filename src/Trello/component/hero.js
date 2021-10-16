import React from "react";
import styled from "styled-components";
import HeroForm from "./heroform";
import heroImg from "../asset/hero.png";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <ContentHeader>Trello helps teams move work forward.</ContentHeader>
          <ContentDesc>
            Collaborate, manage projects, and reach new productivity peaks. From high rises to the
            home office, the way your team works is unique—accomplish it all with Trello.
          </ContentDesc>
          <HeroForm />
        </Content>
        <HeroImg src={heroImg} />
      </Wrapper>
    </Container>
  );
};

export default Hero;
const ContentHeader = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: ;
`;
const ContentDesc = styled.div`
  font-size: 18px;
  width: 650px;
  letter-spacing: 1.2px;
  margin-top: 20px;
`;
const HeroImg = styled.img`
  width: 450px;
  height: 600px;
  padding: 0 30px;
`;
const Content = styled.div`
  width: 600px;
  color: #091e42;
  padding: 0 100px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eeebfd;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
