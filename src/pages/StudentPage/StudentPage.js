import React from "react";

import {
  GraphContainer,
  GraphFlex,
  StudentPageContainer,
} from "./StudentPage.element";

import MyResponsiveRadar from "../../components/CustomRadar/CustomRadar";

import { AGraphData, BGraphData } from "../../dummy/GraphDummy";
const StudentPage = ({ width }) => {
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
    </StudentPageContainer>
  );
};

export default StudentPage;
