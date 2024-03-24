import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>404</h1>
        <h3>UH OH! You're lost.</h3>
        <p>
          the page you are looking for does not exist. How you gothere is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Button>
          <NavLink to={"/"}>HOME</NavLink>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  h1 {
    margin: 1em 0;
  }
`;
