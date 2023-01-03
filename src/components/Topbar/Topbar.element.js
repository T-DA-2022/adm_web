import styled from "styled-components";

export const TopbarContainer = styled.div`
  background-color: purple;
  /* height: 12vh; */
  height: 60px;
  width: ${(props) => `${props.width}px`};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline-start: 2vw;
  box-sizing: border-box;
`;

export const TopbarMenuIconContainer = styled.div`
  display: flex;
`;
