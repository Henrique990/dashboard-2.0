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
    BarElement
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
    Legend,
    BarElement
);

import { Bar } from "react-chartjs-2"

import React from 'react'

function Chartjs04() {
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
            <div>Chartjs04</div>
            <div className="flex justify-center">
                <Bar data={data} />
            </div>
        </>
    );
}
export default Chartjs04