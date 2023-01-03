import React, { useEffect, useState } from "react";
import StudentCard from "../../components/StudentCard/Studentcard";
import Carousel from "react-bootstrap/Carousel";

import {
  CalendarContainer,
  DatePickAreaContainer,
  DatePickerContainer,
  MainpageContainer,
  CalendarConfirmDiv,
  CalendarConfirmBtn,
} from "./Mainpage.element";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mainpage.custom.css";
import UserList from "../../dummy/UserDummy";
import CustomReactCalendar from "../../components/CustomReactCalendar/CustomReactCalendar";
import DateStringGenerator from "../../hooks/DateStringGenerator";

const MainPage = () => {
  const [datepick, setDatePick] = useState(new Date());
  const [calendarview, setCalendarView] = useState(true);
  const CustomDatePicker = () => {
    return (
      <DatePickerContainer
        status={1 - calendarview}
        onClick={() => setCalendarView(!calendarview)}
      >
        <>{DateStringGenerator(datepick)}</>
      </DatePickerContainer>
    );
  };

  return (
    <MainpageContainer>
      <DatePickAreaContainer>
        <CustomDatePicker />
        <CalendarContainer status={calendarview}>
          <CustomReactCalendar />
          <CalendarConfirmDiv>
            <CalendarConfirmBtn onClick={() => setDatePick(new Date())}>
              오늘
            </CalendarConfirmBtn>
            <CalendarConfirmBtn onClick={() => setCalendarView(!calendarview)}>
              확인
            </CalendarConfirmBtn>
          </CalendarConfirmDiv>
        </CalendarContainer>
      </DatePickAreaContainer>
      <Carousel interval={null} variant="dark">
        {/* get user by axios on chosen date */}
        {UserList.map((data) => (
          <Carousel.Item key={data.id}>
            <StudentCard data={data} />
          </Carousel.Item>
        ))}
      </Carousel>
    </MainpageContainer>
  );
};

export default MainPage;
