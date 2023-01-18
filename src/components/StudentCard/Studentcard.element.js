import styled from "styled-components";

export const StudentCardContainer = styled.div`
  border: 1px solid black;
  width: 520px;
  height: 258px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StudentCardTopDiv = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 2vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 6vw;
`;
export const StudentCardNameSection = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

export const StudentCardName = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-style: italic;
`;

export const StudentCardGameInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StudentCardDesc = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StudentCardCalendarDiv = styled.div`
  width: 100%;
  height: 80%;
`;
