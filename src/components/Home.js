import React from "react";
import styled, { css } from "styled-components";
import palette from "../lib/styles";
import Responsive from "./common/Responsive";

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

const Section = styled.section`
  margin: 0 0 30px;
  font-size: 24px;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 1.5;
  color: #495057;
`;
const ColorWrap = styled.div`
  .colorChips {
    text-align: center;

    .colorChip {
      position: relative;
      min-height: 1px;
      padding-right: 2px;
      padding-left: 2px;
      float: left;
      width: 19%;
      margin-bottom: 40px;
      line-height: 1.25;

      .colorChipBg {
        height: 80px;
        background: #e9ecef;
      }
      .colorName {
        padding: 14px 3px 2px;
        text-transform: uppercase;
        text-align: left;
        font-size: 14px;
        font-weight: 500;
      }
      .colorHex {
        width: 100%;
        padding: 2px 3px;
        text-align: left;
        font-size: 14px;
        color: #868e96;
        line-height: 1.3;
      }
    }
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

      <Section>
        <h3>Gray</h3>
        <ColorWrap>
          <div className="colorChips">
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>

            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
            <div className="colorChip">
              <div className="colorChipBg" />
              <div className="colorName">gray 0</div>
              <div className="colorHex">#f8f9fa</div>
            </div>
          </div>
        </ColorWrap>
      </Section>
    </HomeBlock>
  );
};

export default Home;
