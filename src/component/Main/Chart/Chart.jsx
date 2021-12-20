import React from 'react'
import { Line } from "react-chartjs-2";
const Graphical = () => {

  const data = {
    labels: ["Training sessions", "Team meetings", "Medical checks", ],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor: "#FFC961"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      },
      {
        label: "Third dataset",
        data: [41, 55, 45, 54, 64, 96],
        fill: false,
        borderColor: "#505DD6"
      }
    ]
  };
  return (
    <div className="graph-content">
      <div className="graph-text"><h2>Half Year Work Results</h2>
        <button>Browse more</button>
      </div>
      <Line data={ data } />
    </div>
  )
}

export default Graphical
