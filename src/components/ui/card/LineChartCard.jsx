import React from 'react'
import Chart from '../chart/Chart'

const LineChartCard = () => {
  return (
    <div
      className="card w-auto shadow-xl"
      style={{
        backgroundColor: "#161b22",
      }}
    >
      <div className="card-body">
        <h2 className="card-title text-gray-50 w-32 ">Sales</h2>
        <h2 className="text-gray-50 font-bold text-xl">Sales by Category (Last 30 days)</h2>
        <div className="mt-5" >
            <Chart />
        </div>
      </div>
    </div>
  )
}

export default LineChartCard