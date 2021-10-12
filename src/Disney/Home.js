import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

const Home = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact component={MovieCard}></Route>
          <Route path="/detail/:id" exact component={MovieDetail}></Route>
        </Switch>
      </Router>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
