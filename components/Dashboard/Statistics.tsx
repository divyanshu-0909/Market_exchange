import Calendar from "./Calendar";
import ChartComp, { CustomBar, HalfDoughnut, Icon } from "./Chart";
import UpperCard from "./MiddleCard";
import {MiddleCard, TabCard } from "./MiddleCard";
import TopCard from "./TopCard";

const Statistics = () => {
  return (
    <div className="py-5">
      <div className=" grid grid-cols-3">
        <TopCard title={"N/A"} label={"Total Trades"} chart={<ChartComp />} />
        <TopCard
          title={"0.00"}
          label={"Avg win/loss trade"}
          chart={<CustomBar low={"30"} high={"60"} />}
        />
        <TopCard title={"₹0.00"} label={"Net P&L"} chart={<Icon />} />
      </div>
      <div className="grid grid-cols-2">
        <TopCard is title={"0.00%"} label={"Lose %"} chart={<HalfDoughnut />} />
        <TopCard is title={"0.00%"} label={"Win %"} chart={<HalfDoughnut />} />
      </div>
      <div className=" flex justify-between">
        <div>
          <UpperCard title="Account Balance" />
          <TabCard title="Recent Trade" title2="Open Positions" />
        </div>
          <div className="flex flex-1 flex-col">
          <Calendar />
          <div className="flex flex-1">
          <MiddleCard title="Daily Net Cumulative P&L" />
          <MiddleCard title="Drawdown" />
        </div>
          </div>
      </div>
    </div>
  );
};

export default Statistics;
