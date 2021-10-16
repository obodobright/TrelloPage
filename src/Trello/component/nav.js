import React from "react";
import styled from "styled-components";
import { ImTrello } from "react-icons/im";

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <ImTrello />
          <span>Trello</span>
        </Logo>
        <Navigation>
          <NavLink>Login</NavLink>
          <NavBtn>Sign up</NavBtn>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Nav;

const NavBtn = styled.div`
  margin: 0 10px;
  font-size: 16px;
  background: #2e55cc;
  color: white;
  width: 70px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;
const NavLink = styled.div`
  margin: 0 10px;
  font-size: 16px;
  color: #2e55cc;
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #2a7ef3;
  margin: 0 15px;
  span {
    font-size: 33px;
    font-weight: bold;
    color: #293856;
    margin: 0 8px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background: transparent;
`;
