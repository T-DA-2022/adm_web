import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

const MyResponsiveRadar = ({ data, keys, legend_data }) => {
  return (
    <ResponsiveRadar
      data={data}
      // keys={["last_week", "this_week", "pro_debut"]}
      keys={keys}
      indexBy="label"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      fillOpacity={0.8}
      dotSize={6}
      dotColor={{ from: "color" }}
      colors={{ scheme: "accent" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={legend_data}

      // legends={}
    />
  );
};

export default MyResponsiveRadar;
