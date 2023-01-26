import { useState } from "react";

import { DatePicker } from "antd";
import CustomModal from "../CustomModal/CustomModal";

import {
  CompareDivContainer,
  GraphContainer,
  GraphOptionContainer,
} from "./CompareBox.element";

const ProCompare = () => {
  const proList = [
    {
      id: 1,
      name: "top",
    },
    {
      id: 2,
      name: "jg",
    },
    {
      id: 3,
      name: "mid",
    },
    {
      id: 4,
      name: "bot",
    },
    {
      id: 5,
      name: "sup",
    },
  ];

  return (
    <CompareDivContainer>
      <GraphOptionContainer>
        기준 날짜
        <DatePicker />
        {/* <CustomModal
          selected={student}
          selectList={proList}
          setStudent={setStudent}
          optionWord="선수"
        /> */}
      </GraphOptionContainer>
      <GraphContainer>{/* <MyResponsiveLine data={data} /> */}</GraphContainer>
    </CompareDivContainer>
  );
};

export default ProCompare;
