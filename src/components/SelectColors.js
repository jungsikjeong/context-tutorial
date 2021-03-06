import React from "react";
import palette from "../lib/styles";
import styled from "styled-components";
import { ColorConsumer } from "../contexts/color";

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
        text-transform: none;
      }
    }
  }
`;

const SelectColors = () => {
  console.log(palette.gray);

  return (
    <ColorConsumer>
      {({ actions }) => (
        <>
          <Section id="gray">
            <h3>gray</h3>
            <ColorWrap>
              <div className="colorChips">
                {palette.gray.map((color, index) => (
                  <div className="colorChip" key={color}>
                    <div
                      className="colorChipBg"
                      style={{ background: color }}
                      onClick={() => actions.setColor(color)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        actions.setSubColor(color);
                      }}
                    />
                    <div className="colorName">gray{index}</div>
                    <div className="colorHex">{color}</div>
                  </div>
                ))}
              </div>
            </ColorWrap>
          </Section>
          <Section id="red">
            <h3>red</h3>
            <ColorWrap>
              <div className="colorChips">
                {palette.red.map((color, index) => (
                  <div className="colorChip" key={color}>
                    <div
                      className="colorChipBg"
                      style={{ background: color }}
                      onClick={() => actions.setColor(color)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        actions.setSubColor(color);
                      }}
                    />
                    <div className="colorName">red{index}</div>
                    <div className="colorHex">{color}</div>
                  </div>
                ))}
              </div>
            </ColorWrap>
          </Section>
          <Section id="pink">
            <h3>pink</h3>
            <ColorWrap>
              <div className="colorChips">
                {palette.pink.map((color, index) => (
                  <div className="colorChip" key={color}>
                    <div
                      className="colorChipBg"
                      style={{ background: color }}
                      onClick={() => actions.setColor(color)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        actions.setSubColor(color);
                      }}
                    />
                    <div className="colorName">pink{index}</div>
                    <div className="colorHex">{color}</div>
                  </div>
                ))}
              </div>
            </ColorWrap>
          </Section>
          <Section id="grape">
            <h3>grape</h3>
            <ColorWrap>
              <div className="colorChips">
                {palette.grape.map((color, index) => (
                  <div className="colorChip" key={color}>
                    <div
                      className="colorChipBg"
                      style={{ background: color }}
                      onClick={() => actions.setColor(color)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        actions.setSubColor(color);
                      }}
                    />
                    <div className="colorName">grape{index}</div>
                    <div className="colorHex">{color}</div>
                  </div>
                ))}
              </div>
            </ColorWrap>
          </Section>
        </>
      )}
    </ColorConsumer>
  );
};

export default SelectColors;
