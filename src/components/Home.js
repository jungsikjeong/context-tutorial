import React from "react";
import styled, { css } from "styled-components";
import palette from "../lib/styles";
import Responsive from "./common/Responsive";
import SelectColors from "./SelectColors";

const HomeBlock = styled(Responsive)`
  max-width: 1000px;
`;

const Header = styled.div`
  font-weight: 600;
  color: #495057;
  line-height: 1.2;

  margin-top: 5rem;
  border-bottom: 1px solid #dee2e6;
`;

const StylesChart = styled.ul`
  padding: 0;

  li {
    display: block;
    padding: 6px 0;
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: #868e96;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s ease-out;
  }

  li span {
    display: inline-block;
    margin-top: -2px;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    vertical-align: middle;
  }
`;

const Home = () => {
  return (
    <HomeBlock>
      <Header>
        <h1>
          Open color is an
          <br />
          open-source color scheme
        </h1>
      </Header>
      <StylesChart>
        <li>
          <span style={{ background: palette.gray[9] }}></span>gray
        </li>
        <li>
          <span style={{ background: palette.red[9] }}></span>
          red
        </li>
        <li>
          <span style={{ background: palette.pink[9] }}></span>pink
        </li>
        <li>
          <span style={{ background: palette.grape[9] }}></span>grape
        </li>
      </StylesChart>

      <SelectColors />
    </HomeBlock>
  );
};

export default Home;
