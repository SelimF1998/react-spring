import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';

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
  ];

  const activities = [
    {
      icon: <CurrencyBitcoinIcon />,
      time: "10:00:25 AM",
      value: "+1025.0",
      state: "completed",
    },
    {
      icon: <AttachMoneyIcon />,
      time: "12:56:10 AM",
      value: "-200.43",
      state: "completed",
    },
    {
      icon: <EuroIcon />,
      time: "09:12:25 PM",
      value: "+625.25",
      state: "completed",
    },
    {
      icon: <CurrencyYenIcon />,
      time: "11:30:11 AM",
      value: "-600.40",
      state: "completed",
    },
  ]

  return (
    <div className="overview">
      <h1 className="px-6 py-6 text-gray-300 text-3xl font-extrabold">Overview</h1>
      <div className="flex gap-5 justify-center ">
        {cards.map((card, index) => {
          return <OverviewCard card={card} index={index} />;
        })}
      </div>
      <div className="mt-5">
        <h1 className="px-6 py-6 text-gray-300 text-3xl font-extrabold">
          Market Overview
        </h1>
      </div>
      <div className="flex gap-5 justify-center">
        <div className="linechart">
          <LineChartCard />
        </div>
        <div className="piechart">
          <PieChartCard />
        </div>
      </div> 
    </div>
  );
};

export default Overview;
