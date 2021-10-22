import React, { useState } from "react";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";

const AccordionList = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <Button onClick={() => setIsActive(!isActive)}>
        {" "}
        {isActive ? <BiMinus /> : <GoPlus />} Learn More{" "}
      </Button>
      {isActive && <LearnMore>{data.learnMore}</LearnMore>}
    </Container>
  );
};

export default AccordionList;
const Button = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const LearnMore = styled.div`
  font-size: 20px;
  transition: all 350ms;
`;
const Container = styled.div`
  transition: all 350ms;
`;
