import React from "react";
import styled from "styled-components";
import { GoQuote } from "react-icons/go";

const SliderList = ({ quoteContent, name1, dept1, name2, dept2, img }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  return (
    <div>
      <WrapperContent>
        <TopContent>
          <Dots>000</Dots>
          <GlobalButton>
            <Button>{SampleNextArrow}</Button>
            <Button>{SamplePrevArrow}</Button>
          </GlobalButton>
        </TopContent>
        <Content>
          <Quote>
            <MyQuote>
              <GoQuote
                style={{
                  fontSize: "70px",
                  marginTop: "-20px",
                  marginLeft: "-20px",
                  padding: "0 10px",
                  color: "#00B8D9",
                }}
              />
              <QuoteContent>{quoteContent}</QuoteContent>
            </MyQuote>
          </Quote>
          <ImgContainer>
            <TestiInfo>
              <About>
                <Name fw>{name1}</Name> : <Dept fs>{dept1}y</Dept>
              </About>
              <About>
                <Name fs>{name2}</Name> : <Dept fw>{dept2}</Dept>
              </About>
            </TestiInfo>
            <Image src={img} />
          </ImgContainer>
        </Content>
      </WrapperContent>
    </div>
  );
};

export default SliderList;

const Image = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
`;
const About = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: #091e42;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 35px;
  align-items: center;
`;

const QuoteContent = styled.div`
  color: #091e42;
`;
const MyQuote = styled.div`
  font-size: 36px;
  font-weight: 400;
  padding: 0 10px;
  display: flex;
`;
const Name = styled.div`
  font-size: ${({ fs }) => (fs ? "16px" : "18px")};
  font-weight: ${({ fw }) => (fw ? "600" : "400")};
  letter-spacing: 1.1px;
`;
const Dept = styled.div`
  font-size: ${({ fs }) => (fs ? "16px" : "18px")};
  font-weight: ${({ fw }) => (fw ? "600" : "400")};
  margin-left: 5px;
`;
const TestiInfo = styled.div`
  margin-top: 20px;
`;
const Quote = styled.div``;
const Content = styled.div`
  width: 80%;
`;
const Button = styled.button`
  margin: 0 7px;
  font-size: 18px;
`;
const TopContent = styled.div`
  display: flex;
  justify-content: end;
  width: 80%;
  margin: 30px 0;
`;
const Dots = styled.div`
  width: 30px;
  height: 20px;
  background: red;
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const GlobalButton = styled.div`
  display: flex;
`;
