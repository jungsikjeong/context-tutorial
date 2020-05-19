import React, { useContext } from "react";
import ColorContext from "../contexts/color";
import styled from "styled-components";

const ColorBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;

  z-index: 10;
  width: 20%;
  height: 20%;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  margin-top: 1.3rem;
  margin-right: 1rem;
  margin-left: auto;
  background: ${(props) => props.color};
`;

const ColorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <ColorBlock color={state.subColor}>
      <ColorWrap>
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            color: state.color,
          }}
        >
          원하시는 색상을 클릭해보세요.
          <br />
          <p>
            마우스 오른쪽 클릭으로 <br /> 배경을 바꿔보세요
          </p>
        </div>
      </ColorWrap>
    </ColorBlock>
  );
};

export default ColorBox;
