import React from "react";

const OverviewCard = ({card, index}) => {
  return (
    <div
      key={index}
      className="card w-72 shadow-xl"
      style={{
        backgroundColor: card.color,
      }}
    >
      <div className="card-body">
        <h2 className="card-title text-gray-50 w-32 ">{card.icon}</h2>
        <h2 className="text-gray-50 font-bold text-3xl">{card.value}</h2>
        <h2 className="text-gray-50 font-bold">{card.percentage}</h2>
      </div>
    </div>
  );
};

export default OverviewCard;
