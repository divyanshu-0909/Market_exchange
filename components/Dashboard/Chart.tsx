"use client";
import React, { useState } from "react";
import { Chart, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AudioLines } from "lucide-react";
ChartJS.register(ArcElement, Tooltip, Legend);
const ChartComp = () => {
  const UserData = [
    {
      id: 1,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      userGain: 45677,
      userLost: 345,
    },
  ];

  const [userData, setUserData] = useState({
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#FF6384", "#50AF95"],
        borderColor: ["#FF6384", "#50AF95"],
        cutout: "65%",
      },
    ],
  });

  return <Doughnut width={70} data={userData} />;
};

interface CustomBarProps {
  high: string | number;
  low: string | number;
}

export const CustomBar: React.FC<CustomBarProps> = ({ high, low }) => (
  <div className="w-[15vw] flex mx-4 my-7 flex-col ">
    <div className="w-full bg-red-500 h-2 rounded-full overflow-hidden">
      <div
        className="w-full h-full bg-green-500"
        style={{ width: `${high}%` }}
      ></div>
    </div>
  </div>
);

export const Icon = () => {
  return (
    <div className=" px-7 py-5">
      <AudioLines />
    </div>
  );
};

export const HalfDoughnut = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        label: "Shop 1",
        data: [100, 50],
        backgroundColor: ["#FF6384", "#50AF95"],
        borderColor: ["#FF6384", "#50AF95"],
        circumference: 180,
        rotation: 270,
        cutout: "70%",
      },
    ],
  };
  const options = {};
  return <Doughnut data={data} width={80} options={options}></Doughnut>;
};

export default ChartComp;
