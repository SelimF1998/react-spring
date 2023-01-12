import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Home = () => {
  const cards = [
    {
      icon: <CurrencyBitcoinIcon />,
      value: "1200",
      percentage: "45% this week",
      color: "#12b03c",
    },
    {
      icon: <AttachMoneyIcon />,
      value: "1200",
      percentage: "45% this week",
      color: "#527abf",
    },
    {
      icon: <EuroIcon />,
      value: "1200",
      percentage: "45% this week",
      color: "#f54550",
    },
  ];

  return (
    <div className="home">
      <h1 className="px-6 py-6 text-red-500 text-3xl font-extrabold">Home</h1>
      <div className="flex gap-5 justify-center ">
        {cards.map((card, index) => {
          return (
            <div key={index} className="card w-72 shadow-xl" style={{
              backgroundColor: card.color
            }}>
              <div className="card-body">
                <h2 className="card-title text-gray-50 w-32 ">{card.icon}</h2>
                <h2 className="text-gray-50 font-bold text-3xl">{card.value}</h2>
                <h2 className="text-gray-50 font-bold">{card.percentage}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5" >
      <h1 className="px-6 py-6 text-red-500 text-3xl font-extrabold">Market Overview</h1>
      </div>
      
    </div>
  );
};

export default Home;
