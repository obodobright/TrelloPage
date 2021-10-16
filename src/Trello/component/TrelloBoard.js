import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import boardImg from "../asset/board.png";
import cosco from "../asset/cosco.svg";
import google from "../asset/google.svg";
import fender from "../asset/fender.svg";
import squarespace from "../asset/squarespace.svg";

const TrelloBoard = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <ContentHeader>It’s more than work. It’s a way of working together.</ContentHeader>
          <ContentDesc>
            Start with a Trello board, lists, and cards. Customize and expand with more features as
            your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one
            place.
          </ContentDesc>
        </Content>
        <Button>
          Start Doing <BsArrowRight style={{ marginLeft: "5px" }} />
        </Button>
        <BoardImg src={boardImg} />
        <ContentFooter>
          <FooterSub>
            Join over 1,000,000 teams worldwide that are using Trello to get more done.
          </FooterSub>
          <FooterIcon>
            <Icon src={google} />
            <Icon src={fender} />
            <Icon src={squarespace} />
            <Icon src={cosco} />
          </FooterIcon>
        </ContentFooter>
      </Wrapper>
    </Container>
  );
};

export default TrelloBoard;

const Icon = styled.img`
  margin: 10px 20px;
`;
const FooterSub = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const FooterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentFooter = styled.div`
  padding: 20px 0;
`;
const ContentHeader = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const ContentDesc = styled.div`
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  width: 80%;
  line-height: 1.4;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: #091e42;
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 2px 5px;
  color: #1865f2;
  border: 1px solid #1865f2;
  border-radius: 5px;
  transition: all 350ms;
  margin: 30px 0;
  :hover {
    cursor: pointer;
    background: #1865f2;
    color: white;
  }
`;
const BoardImg = styled.img`
  width: 80%;
`;
const Wrapper = styled.div`
  padding: 3em 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(360deg, whitesmoke, #eeebfd);
`;
