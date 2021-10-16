import React from "react";
import styled from "styled-components";
import Hero from "./hero";
import Nav from "./nav";

const Home = () => {
  return (
    <Container>
      <Nav />
      <Hero />
    </Container>
  );
};
export default Home;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #edeafc;
`;
