import styled from "styled-components";

export const MainpageContainer = styled.div`
  background-color: white;
  width: 65vw;
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  display: ${(props) => (props.status ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;

export const DatePickAreaContainer = styled.div`
  display: flex;
`;

export const DatePickerContainer = styled.div`
  display: ${(props) => (props.status ? "flex" : "none")};
  border: 1px solid black;
  height: 48px;
  width: 200px;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CalendarConfirmDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-top: 4px;
`;

export const CalendarConfirmBtn = styled.div`
  /* background-color: yellow; */
  margin-left: 8px;
  font-size: 18px;
  border: 1px solid #a0a096;
  padding: 2px 8px;
  &:hover {
    cursor: pointer;
  }
`;
