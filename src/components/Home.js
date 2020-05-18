import React from "react";
import styled, { css } from "styled-components";
import palette from "../lib/styles";
import Responsive from "./common/Responsive";
import SelectColors from "./SelectColors";
import ColorBox from "./ColorBox";
import { Link } from "react-router-dom";

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

    text-transform: uppercase;
  }

  li span {
    display: inline-block;
    margin-top: -2px;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const SLink = styled(Link)`
  color: #868e96;
  text-decoration: "none";
  transition: all 0.2s ease-out;
  letter-spacing: 0.05em;
  font-size: 12px;
  font-weight: 400;
  :hover {
    color: ${(props) => props.color || "#868e96"};
  }
`;

const Home = () => {
  return (
    <>
      <ColorBox />
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
            <SLink to="#gray" color={palette.gray[7]}>
              <span style={{ background: palette.gray[7] }}></span>gray
            </SLink>
          </li>
          <li>
            <SLink to="#gray" color={palette.red[7]}>
              <span style={{ background: palette.red[7] }}></span>
              red
            </SLink>
          </li>
          <li>
            <SLink to="#gray" color={palette.pink[7]}>
              <span style={{ background: palette.pink[7] }}></span>pink
            </SLink>
          </li>
          <li>
            <SLink to="#gray" color={palette.grape[7]}>
              <span style={{ background: palette.grape[7] }}></span>grape
            </SLink>
          </li>
        </StylesChart>
        <SelectColors />
      </HomeBlock>
    </>
  );
};

export default Home;
