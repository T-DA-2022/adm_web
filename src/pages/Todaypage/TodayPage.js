import React from "react";

import {
  GraphContainer,
  GraphFlex,
  TodayPageContainer,
} from "./TodayPage.element";

import MyResponsiveRadar from "../../components/CustomRadar/CustomRadar";

import { AGraphData, BGraphData } from "../../dummy/GraphDummy";
const TodayPage = ({ width }) => {
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
    <TodayPageContainer width={width}>
      <GraphFlex>
        <GraphContainer legend={true} width={width}>
          <MyResponsiveRadar data={AGraphData} legend_data={legend_data} />
        </GraphContainer>
        <GraphContainer legend={false} width={width}>
          <MyResponsiveRadar data={BGraphData} />
        </GraphContainer>
      </GraphFlex>
    </TodayPageContainer>
  );
};

export default TodayPage;
