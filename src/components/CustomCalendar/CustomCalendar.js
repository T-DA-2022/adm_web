import React, { useState, useEffect } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

const MyResponsiveCalendar = ({ data /* see data tab */ }) => {
  const [thisstring, setThisString] = useState("2023-01-01");
  const [laststring, setLastString] = useState("2022-01-01");
  useEffect(() => {
    var thisyear = new Date().getFullYear();

    setThisString(thisyear.toString() + "-01-01");
    setLastString((thisyear - 1).toString() + "-01-01");
  }, []);
  const KRMonth = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <ResponsiveCalendar
      data={data}
      from={laststring}
      to={thisstring}
      emptyColor="#eeeeee"
      minValue={1}
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 30, right: 40, bottom: 30, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      monthLegend={(year, month) => KRMonth[month]}
      // legends={[
      //   {
      //     anchor: "bottom-right",
      //     direction: "row",
      //     translateY: 36,
      //     itemCount: 4,
      //     itemWidth: 42,
      //     itemHeight: 36,
      //     itemsSpacing: 14,
      //     itemDirection: "right-to-left",
      //   },
      // ]}
    />
  );
};
export default MyResponsiveCalendar;
