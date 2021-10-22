import React from "react";
import styled from "styled-components";
import "./App.css";
// import Country from "./COUNTRY/country";
// import Nav from "./COUNTRY/nav";
// import Home from "./Disney/Home";
import TrelloHome from "./Trello/component/home";
const App = () => {
  return (
    <Container>
      <TrelloHome />
    </Container>
  );
};

export default App;
const Container = styled.div``;
