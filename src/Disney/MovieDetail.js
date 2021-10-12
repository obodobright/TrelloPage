import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import data from "./data.json";

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(data[id]);
  }, []);

  return (
    <Container>
      <Wrapper>
        <BackgroundImg src={movie?.backgroundImg} />
        <TitleImg src={movie?.titleImg} />
        <Subtitle>{movie?.subTitle}</Subtitle>
        <Description>{movie?.description}</Description>
      </Wrapper>
    </Container>
  );
};

export default MovieDetail;

const Description = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  top: 60%;
  left: 20px;
  color: white;
  line-height: 1.2;
  font-weight: 800;
  font-size: 14px;
  padding-top: 20px;
`;
const TitleImg = styled.img`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 25%;
  left: 20px;
`;
const Subtitle = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: white;
  position: absolute;
  top: 57%;
  left: 20px;
`;
const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background: transparent;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  height: 100vh;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
