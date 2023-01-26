import styled from "styled-components";

export const StudentPageContainer = styled.div`
  background-color: #e8e6cb;
  width: ${(props) => `${props.width}px`};
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
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

export const GraphBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  height: 300px;
`;

export const SpecificGraphContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const SpecificRadioDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SpecificGraphBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
