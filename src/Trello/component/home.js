import React from "react";
import styled from "styled-components";
import Hero from "./hero";
import Nav from "./nav";
import TrelloBoard from "./TrelloBoard";

const Home = () => {
  return (
    <Container>
      <Nav />
      <Hero />
      <TrelloBoard />
    </Container>
  );
};
export default Home;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #edeafc;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
