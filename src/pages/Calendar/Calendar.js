import React from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalenadarPageContainer } from "./Calendar.element";

const CalendarPage = () => {
  return (
    <CalenadarPageContainer>
      <Calendar />
    </CalenadarPageContainer>
  );
};

export default CalendarPage;
