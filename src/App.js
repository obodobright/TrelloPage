import React from "react";
import styled from "styled-components";
import Country from "./COUNTRY/country";
import Nav from "./COUNTRY/nav";

const App = () => {
  return (
    <Container>
      <Nav />
      <Country />
    </Container>
  );
};

export default App;
const Container = styled.div``;
