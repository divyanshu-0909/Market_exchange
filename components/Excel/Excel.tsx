"use client";
import React from "react";
import Spreadsheet from "react-spreadsheet";

const Excel = ({
  columnLabels,
  rowLabels,
  data,
}: {
  columnLabels: Array<string>;
  rowLabels: Array<string>;
  data: {
    value: string;
  }[][];
}) => {
  // const [data, setData] = useState([
  //   [{ value: "Vanilla" }, { value: "Chocolate" }],
  //   [{ value: "Strawberry" }, { value: "Cookies" }],
  // ]);

  const handleDataChange = (newData: any) => {
    // setData(newData);
    console.log(newData);
  };

  return (
    <Spreadsheet
      data={data}
      columnLabels={columnLabels}
      rowLabels={rowLabels}
      onChange={handleDataChange}
      className=" overflow-scroll"
    />
  );
};
export default Excel;
