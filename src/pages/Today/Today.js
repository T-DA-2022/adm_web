import React, { useState, useEffect } from "react";

import "react-calendar/dist/Calendar.css";
import {
  NameInput,
  NameLine,
  NameDiv,
  TodayFormContainer,
  TodayPageContainer,
  DateCheckbox,
  NameLabel,
  LineArea,
  SpecificDiv,
  Graphdiv,
  SpecificInput,
  SpecificLine,
  FeedbackDiv,
  SubmitBtn,
  NameSpan,
  VideoRecommendArea,
  VideoRecommendInput,
  VideoAddBtn,
  VideoRecommendLine,
} from "./Today.element";

import UserList from "../../dummy/UserDummy";
import CustomModal from "../../components/CustomModal/CustomModal";
import MyResponsiveRadar from "../../components/CustomRadar/CustomRadar";

const TodayPage = () => {
  const [graphData, setGraphData] = useState([
    {
      label: "출결",
      today: 0,
    },
    {
      label: "연습량",
      today: 0,
    },
    {
      label: "이론습득력",
      today: 0,
    },
    {
      label: "주간 목표 달성률",
      today: 0,
    },
    {
      label: "테스트 성적",
      today: 0,
    },
    {
      label: "커뮤니케이션",
      today: 0,
    },
  ]);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [student, setStudent] = useState(UserList[0]);
  const [recDivCnt, setRecDivCnt] = useState(1);
  const NewGraphSet = () => {
    // console.log(graphData);
    return <MyResponsiveRadar keys={["today"]} data={graphData} />;
  };

  const changeHandler = (e, idx) => {
    // var tmp = graphData[idx];
    // tmp.today = Number(e.target.value);
    graphData[idx].today = Number(e.target.value);
    // setGraphData([...graphData, tmp]);
    // console.log(graphData);
    setGraphData([...graphData]);
  };

  return (
    <TodayPageContainer>
      <TodayFormContainer>
        <NameLine>
          <NameSpan clickable={true}>
            {/* <NameDiv>김문기</NameDiv> 학생 */}
            <CustomModal
              selected={student}
              selectList={UserList}
              setStudent={setStudent}
            />
          </NameSpan>
          <NameSpan>
            <NameLabel>날짜</NameLabel>
            <NameInput
              type="date"
              autoFocus
              value={date}
              onChange={(date) => setDate(date.target.value)}
              id="datepicker"
            ></NameInput>
            <DateCheckbox type="checkbox"></DateCheckbox>
          </NameSpan>
        </NameLine>
        {/* <NameLine>
          <NameLabel>연습량</NameLabel>
          <NameInput disabled value="3"></NameInput>
        </NameLine> */}
        <LineArea>
          <Graphdiv>
            {/* <MyResponsiveRadar keys={["today"]} data={graphData} /> */}
            <NewGraphSet />
          </Graphdiv>
          <SpecificDiv>
            <SpecificLine>
              출결
              <SpecificInput
                type="text"
                onBlur={(e) => changeHandler(e, 0)}
              ></SpecificInput>
            </SpecificLine>
            <SpecificLine>
              연습량
              <SpecificInput
                type="text"
                onBlur={(e) => changeHandler(e, 1)}
              ></SpecificInput>
            </SpecificLine>
            <SpecificLine>
              이론습득력
              <SpecificInput
                type="text"
                onBlur={(e) => changeHandler(e, 2)}
              ></SpecificInput>
            </SpecificLine>
            <SpecificLine>
              주간목표달성률
              <SpecificInput
                type="text"
                onBlur={(e) => changeHandler(e, 3)}
              ></SpecificInput>
            </SpecificLine>
            <SpecificLine>
              테스트성적
              <SpecificInput
                type="text"
                onBlur={(e) => changeHandler(e, 4)}
              ></SpecificInput>
            </SpecificLine>
            <SpecificLine>
              커뮤니케이션
              <SpecificInput
                type="text"
                onBlur={(e) => changeHandler(e, 5)}
              ></SpecificInput>
            </SpecificLine>
          </SpecificDiv>
        </LineArea>
        피드백 영상
        <VideoRecommendArea>
          <VideoRecommendLine>
            <VideoRecommendInput></VideoRecommendInput>
            <VideoAddBtn type="button">+</VideoAddBtn>
            <VideoAddBtn type="button">-</VideoAddBtn>
          </VideoRecommendLine>
        </VideoRecommendArea>
        세부 피드백
        <FeedbackDiv></FeedbackDiv>
        <SubmitBtn type="button">btn</SubmitBtn>
      </TodayFormContainer>
    </TodayPageContainer>
  );
};

export default TodayPage;
