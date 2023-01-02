import React from "react";

import { ResponsiveRadar } from "@nivo/radar";

import { TodayPageContainer } from "./TodayPage.element";

const TodayPage = () => {
  const data = [
    {
      taste: "fruity",
      chardonay: 42,
      carmenere: 73,
      syrah: 96,
    },
    {
      taste: "bitter",
      chardonay: 65,
      carmenere: 30,
      syrah: 85,
    },
    {
      taste: "heavy",
      chardonay: 29,
      carmenere: 81,
      syrah: 63,
    },
    {
      taste: "strong",
      chardonay: 78,
      carmenere: 99,
      syrah: 36,
    },
    {
      taste: "sunny",
      chardonay: 67,
      carmenere: 82,
      syrah: 109,
    },
  ];
  const MyResponsiveRadar = ({ data /* see data tab */ }) => (
    <ResponsiveRadar
      data={data}
      keys={["chardonay", "carmenere", "syrah"]}
      indexBy="taste"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "nivo" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <TodayPageContainer>
      <div>
        Todaypage test
        <MyResponsiveRadar data={data} />
        {/* <ResponsiveRadar data={data} /> */}
      </div>
    </TodayPageContainer>
  );
};

export default TodayPage;
