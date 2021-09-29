import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountryData from "./country.json";
const Country = () => {
  const [country, setCountry] = useState([]);
  const url = " https://restcountries.eu/rest/v2/all";

  //   const getCountry = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <Container>
      <Wrapper>
        {CountryData.map((data) => (
          <CountryCard key={data.id}>
            <Image />
            <Content>
              <CountryName>{data.country}</CountryName>
              <Population>Population: {data.Population}</Population>
              <Region>Region: {data.Region}</Region>
              <Capital>Capital: {data.Capital}</Capital>
            </Content>
          </CountryCard>
        ))}
      </Wrapper>
    </Container>
  );
};
export default Country;
const Image = styled.div`
  width: 270px;
  height: 50%;
  object-fit: cover;
  background: red;
`;

const CountryName = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 12px;
`;
const Population = styled.div`
  padding: 3px 0;
`;
const Region = styled.div`
  padding: 3px 0;
`;
const Capital = styled.div`
  padding: 3px 0;
`;
const Content = styled.div`
  padding: 10px 15px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: lightgray;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  flex-wrap: wrap;
`;
const CountryCard = styled.div`
  width: 270px;
  height: 300px;
  background: white;
  transition: all 350ms;
  transform: scale(1);
  color: black;
  margin: 10px 15px;

  :hover {
    transform: scale(1.02);
    box-shadow: 0px 02x 3px 0;
  }
`;
