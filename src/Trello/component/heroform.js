import React from "react";
import styled from "styled-components";

const HeroForm = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Input placeholder="Email" />
          <Button>Signup it's free</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default HeroForm;
const Input = styled.input`
  width: 350px;
  height: 40px;
  outline: 0;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  opacity: 0.5;
`;
const Button = styled.div`
  width: 230px;
  height: 43px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 20px;
  color: white;
  padding: 5px;
`;
const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
