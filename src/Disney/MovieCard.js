import React from "react";
import styled from "styled-components";
import data from "./data.json";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <Container>
      <Wrapper>
        {data.map((mydata, index) => {
          const { title, cardImg, myId } = mydata;
          return (
            <Card key={index} to={`/detail/${myId}`}>
              <TitleImg src={cardImg} />
              <ImgVeil>
                <span>{title}</span>
              </ImgVeil>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default MovieCard;
const ImgVeil = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: rgb(0, 0, 0, 0.6);
  transition: all 350ms;

  span {
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    left: 30%;
    font-size: 30px;
    color: white;
    font-family: arial black;
    opacity: 0;
    transition: all 350ms;
  }

  :hover {
    background: rgb(0, 0, 0, 0.2);
    span {
      opacity: 1;
    }
  }
`;
const TitleImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 10px;
`;
const Card = styled(Link)`
  width: 320px;
  height: 350px;
  background: rebeccapurple;
  border-radius: 10px;
  position: relative;
  margin: 10px;

  :hover {
    box-shadow: rgb(0, 0, 0/39%) 0px 16px 16px -10px;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: whitesmoke;
`;
