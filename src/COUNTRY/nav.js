import React from "react";
import styled from "styled-components";

// Api call = https://restcountries.eu/rest/v2/all
const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Where in the World?</Logo>
        <ThemeContainer>Dark Mode</ThemeContainer>
      </Wrapper>
    </Container>
  );
};
export default Nav;
const Logo = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;
const ThemeContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  box-shadow: 1px 0px 10x 0;
`;
const Wrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;
