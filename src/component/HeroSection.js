import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

export const HeroSection = ({ myData }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{myData.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              accusantium nobis id quidem, ea culpa fuga minima expedita maxime?
              Ut?
            </p>
            <NavLink to={"products"}>
              <Button>shop now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                className="img-style"
                alt="hero-section"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem;

  .img-style {
    width: 40em;
    height: auto;
  }
  .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      height: 25em;
      width: 25em;
      background: rgb(98 84 243);
      top: -5em;
      right: 1em;
      z-index: -1;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 5em;

    .hero-section-image {
      margin-top: 6em;
    }
  }
`;
