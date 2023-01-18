import styled from "styled-components";

export const MainpageContainer = styled.div`
  background-color: white;
  width: 675px;
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
  width: 100%;
  justify-content: center;
`;

export const DatePickerContainer = styled.div`
  display: ${(props) => (props.status ? "flex" : "none")};
  border: 1px solid black;
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const DatePickerDateDiv = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-style: italic;
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

export const StudentCardArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
`;

export const StudentListArea = styled.div`
  display: flex;
  width: 155px;
  flex-direction: column;
  border: 1px solid black;
  border-right: none;
  overflow-y: scroll;
  height: 258px;
`;

export const StudentListIndiv = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 20px;
  background-color: #1a0060;
  padding: 8px;
  color: white;
  align-items: center;
  margin-bottom: 12px;
`;
