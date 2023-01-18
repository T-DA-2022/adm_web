import styled from "styled-components";

export const StudentPageContainer = styled.div`
  background-color: #e8e6cb;
  width: ${(props) => `${props.width}px`};
  height: calc(100vh - 60px);
  display: flex;
`;

export const GraphFlex = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;
export const GraphContainer = styled.div`
  width: ${(props) =>
    props.legend
      ? `calc(${props.width}px / 2 + 80px)`
      : `calc(${props.width}px / 2 - 0px)`};
  height: 220px;
`;
