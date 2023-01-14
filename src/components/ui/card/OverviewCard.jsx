import React from "react";
import './OverviewCard.less'

const OverviewCard = ({card, index}) => {
  return (
    <div
      key={index}
      className="card shadow-xl"
      style={{
        backgroundColor: card.color,
      }}
    >
      <div className="card-body">
        <h2 className="card-title text-gray-50 ">{card.icon}</h2>
        <h2 className="text-gray-50 font-bold text-3xl ml-1">{card.value}</h2>
        <h2 className="text-gray-50 font-bold ml-1">{card.percentage}</h2>
      </div>
    </div>
  );
};

export default OverviewCard;
