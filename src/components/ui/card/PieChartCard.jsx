import React from 'react'
import PieChartt from '../chart/PieChartt'

const PieChartCard = () => {
  return (
    <div
      className="card w-96 shadow-xl"
      style={{
        backgroundColor: "#161b22",
      }}
    >
      <div className="card-body">
        <h2 className="card-title text-gray-50 w-32 ">Sales</h2>
        <h2 className="text-gray-50 font-bold text-xl">Sales by Category (Last 30 days)</h2>
        <div className="mt-5" >
            <PieChartt />
        </div>
      </div>
    </div>
  )
}

export default PieChartCard