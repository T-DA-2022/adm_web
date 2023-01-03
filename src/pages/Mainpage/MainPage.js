import React from "react";
import StudentCard from "../../components/StudentCard/Studentcard";
import Carousel from "react-bootstrap/Carousel";

import {
  CalendarContainer,
  DatePickAreaContainer,
  DatePickerContainer,
  MainpageContainer,
} from "./Mainpage.element";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mainpage.custom.css";
import UserList from "../../dummy/UserDummy";
import CustomReactCalendar from "../../components/CustomReactCalendar/CustomReactCalendar";

const MainPage = () => {
  const CustomDatePicker = () => {
    return (
      <DatePickerContainer>
        <></>
      </DatePickerContainer>
    );
  };

  return (
    <MainpageContainer>
      <DatePickAreaContainer>
        <CalendarContainer>
          <CustomDatePicker />
          <CustomReactCalendar />
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
