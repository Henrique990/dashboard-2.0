// 1. Import controllers, elements, etc. which you'11 use 
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// 2. Register them
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

import { Pie }  from "react-chartjs-2"

import React from 'react'

function Chartjs01() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      {/* <div>Chartjs01</div> */}
      <div>
        <div className="inline-block ">
          <Pie data={data} width={200} height={200} />    
        </div>
      </div>
    </>
  );
}
export default Chartjs01