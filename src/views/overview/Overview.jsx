import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

import OverviewCard from "../../components/ui/card/OverviewCard.jsx";
import LineChartCard from "../../components/ui/card/LineChartCard.jsx";
import PieChartCard from "../../components/ui/card/PieChartCard.jsx";

const Overview = () => {
  const cards = [
    {
      icon: <CurrencyBitcoinIcon />,
      value: "1200",
      percentage: "35% this week",
      color: "#12b03c",
    },
    {
      icon: <AttachMoneyIcon />,
      value: "200.43",
      percentage: "45% this week",
      color: "#527abf",
    },
    {
      icon: <EuroIcon />,
      value: "600",
      percentage: "70% this week",
      color: "#f54550",
    },
    {
      icon: <CurrencyYenIcon />,
      value: "450.23",
      percentage: "50% this week",
      color: "#decb3a",
    },
    {
      icon: <CurrencyPoundIcon />,
      value: "700.36",
      percentage: "65% this week",
      color: "#e88113",
    },
  ];

  

  return (
    <div className="overview">
      <h1 className="px-6 py-6 text-gray-300 text-3xl font-extrabold">Overview</h1>
      <div className="flex gap-5 px-6 w-full ">
        {cards.map((card, index) => {
          return <OverviewCard card={card} index={index} />;
        })}
      </div>
      <div className="mt-5">
        <h1 className="px-6 py-6 text-gray-300 text-3xl font-extrabold">
          Market Overview
        </h1>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row px-6">
        <div className="linechart w-full">
          <LineChartCard />
        </div>
        <div className="piechart w-full">
          <PieChartCard />
        </div>
      </div> 
      <div className="mt-5">
        <h1 className="px-6 py-6 text-gray-300 text-3xl font-extrabold">
          Activities
        </h1>
      </div>
    </div>
  );
};

export default Overview;
