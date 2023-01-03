import React from "react";
import MyResponsiveCalendar from "../CustomCalendar/CustomCalendar";

import {
  StudentCardContainer,
  StudentCardName,
  StudentCardDesc,
  StudentCardNameSection,
  StudentCardTopDiv,
  StudentCardGameInfo,
  StudentCardCalendarDiv,
} from "./Studentcard.element";

import CalendarDummy from "../../dummy/CalendarDummy";

const StudentCard = ({ data }) => {
  return (
    <StudentCardContainer>
      <StudentCardTopDiv>
        <StudentCardNameSection>
          <StudentCardName>{data.name}</StudentCardName>
          <StudentCardGameInfo>
            {data.riotid} #{data.riotcode}
          </StudentCardGameInfo>
        </StudentCardNameSection>
        <StudentCardDesc>
          <span>Age</span>
          {data.age}
        </StudentCardDesc>
        <StudentCardDesc>
          <span>Position</span>
          {data.position}
        </StudentCardDesc>
        <StudentCardDesc>
          <span>Tier</span>
          {data.tier}
        </StudentCardDesc>
      </StudentCardTopDiv>
      <StudentCardCalendarDiv>
        <MyResponsiveCalendar data={CalendarDummy}></MyResponsiveCalendar>
      </StudentCardCalendarDiv>
    </StudentCardContainer>
  );
};

export default StudentCard;
