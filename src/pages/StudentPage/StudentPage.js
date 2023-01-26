import React, { useState } from "react";

import {
  GraphBox,
  GraphContainer,
  GraphFlex,
  SpecificGraphBox,
  SpecificGraphContainer,
  SpecificRadioDiv,
  StudentPageContainer,
} from "./StudentPage.element";

import CustomModal from "../../components/CustomModal/CustomModal";
import TwoDayCompare from "../../components/CompareBox/TwoDayCompare";
import PeriodCompare from "../../components/CompareBox/PeriodCompare";
import ProCompare from "../../components/CompareBox/ProCompare";
import MyResponsiveRadar from "../../components/CustomRadar/CustomRadar";

import { AGraphData, BGraphData } from "../../dummy/GraphDummy";

const StudentPage = ({ width }) => {
  const [student, setStudent] = useState([]);
  const legend_data = [
    {
      data: [
        { en: "last_week", kr: "지난주" },
        { en: "this_week", kr: "이번주" },
        { en: "pro_debut", kr: "프로컷" },
      ].map((key) => ({
        id: key.en,
        label: `${key.kr}`,
      })),
      anchor: "top-left",
      direction: "column",
      translateX: -50,
      translateY: -40,
      itemWidth: 80,
      itemHeight: 20,
      itemTextColor: "#433b3b",
      symbolSize: 10,
      symbolShape: "square",
      effects: [
        {
          on: "hover",
          style: {
            itemTextColor: "#000",
          },
        },
      ],
    },
  ];

  return (
    <StudentPageContainer width={width}>
      <GraphBox>
        <GraphFlex>
          <GraphContainer legend={true} width={width}>
            <MyResponsiveRadar
              data={AGraphData}
              keys={["last_week", "this_week", "pro_debut"]}
              legend_data={legend_data}
            />
          </GraphContainer>
          <GraphContainer legend={false} width={width}>
            <MyResponsiveRadar
              data={BGraphData}
              keys={["last_week", "this_week", "pro_debut"]}
            />
          </GraphContainer>
        </GraphFlex>
      </GraphBox>
      <SpecificGraphContainer>
        <SpecificRadioDiv>
          <CustomModal
            selected={student}
            selectList={[
              {
                id: 1,
                name: "선택비교",
              },
              {
                id: 2,
                name: "기간비교",
              },
              {
                id: 3,
                name: "프로비교",
              },
            ]}
            setStudent={setStudent}
            optionWord="옵션"
          />
        </SpecificRadioDiv>
        <SpecificGraphBox>
          {student.name === "선택비교" ? (
            TwoDayCompare()
          ) : student.name === "기간비교" ? (
            PeriodCompare()
          ) : student.name === "프로비교" ? (
            ProCompare()
          ) : (
            <div>옵션을 선택해주세요</div>
          )}
        </SpecificGraphBox>
      </SpecificGraphContainer>
    </StudentPageContainer>
  );
};

export default StudentPage;
