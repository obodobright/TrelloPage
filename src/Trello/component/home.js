import React from "react";
import styled from "styled-components";
import Features from "./features";
import Hero from "./hero";
import Nav from "./nav";
import TrelloBoard from "./TrelloBoard";
import Slider from "./slider";

const Home = () => {
  const [show, setShow] = React.useState(false);

  const toggleNav = () => {
    const heightOfScreen = window.scrollY;
    if (heightOfScreen >= 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", toggleNav);

  return (
    <Container>
      <Nav bg={show ? "bg" : ""} bs={show ? "bs" : ""} />
      <Hero />
      <TrelloBoard />
      <Features />
      <Slider />
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
  font-family: sans-serif;
`;
