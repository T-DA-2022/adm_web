import { ResponsiveLine } from "@nivo/line";

import { DatePicker } from "antd";

import {
  CompareDivContainer,
  GraphContainer,
  GraphOptionContainer,
} from "./CompareBox.element";

const TwoDayCompare = () => {
  const data = [
    {
      id: "KDA",
      color: "hsl(148, 70%, 50%)",
      data: [
        {
          x: "2022-12-31",
          y: 70,
        },
        {
          x: "2023-01-01",
          y: 60,
        },
        {
          x: "2023-01-02",
          y: 40,
        },
        {
          x: "2023-01-03",
          y: 60,
        },
        {
          x: "2023-01-04",
          y: 70,
        },
      ],
    },
    {
      id: "CS",
      color: "hsl(205, 70%, 50%)",
      data: [
        {
          x: "2022-12-31",
          y: 50,
        },
        {
          x: "2023-01-01",
          y: 40,
        },
        {
          x: "2023-01-02",
          y: 80,
        },
        {
          x: "2023-01-03",
          y: 60,
        },
        {
          x: "2023-01-04",
          y: 80,
        },
      ],
    },
    {
      id: "시야점수",
      color: "hsl(282, 70%, 50%)",
      data: [
        {
          x: "2022-12-31",
          y: 70,
        },
        {
          x: "2023-01-01",
          y: 60,
        },
        {
          x: "2023-01-02",
          y: 40,
        },
        {
          x: "2023-01-03",
          y: 60,
        },
        {
          x: "2023-01-04",
          y: 70,
        },
      ],
    },
  ];

  const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <CompareDivContainer>
      <GraphOptionContainer>
        기준 날짜
        <DatePicker />
        비교 날짜
        <DatePicker />
      </GraphOptionContainer>
      <GraphContainer>
        <MyResponsiveLine data={data} />
      </GraphContainer>
    </CompareDivContainer>
  );
};

export default TwoDayCompare;
