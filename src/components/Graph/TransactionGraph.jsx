import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, 
    LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import './TransactionGraph.scss';


ChartJS.register(
    ArcElement,
    CategoryScale, // x axis
    LinearScale, //y axis
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,


)


const TransactionGraph = () => {

    const [chartData, setChartData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("https://fe-task-api.mainstack.io/transactions");
    
            // Convert date format
            const formattedData = data.map(item => ({
                ...item,
                date: new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            }));

            formattedData.sort((a, b) => b.amount - a.amount);
    
            console.log(formattedData);
    
            setChartData({
                labels: formattedData.map(item => item.date),
                datasets: [
                    {
                        label: 'Revenue',
                        data: formattedData.map(item => item.amount),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.3)',
                        color: "#FF5403",
                        pointBorderColor: "aqua",
                        fill: "true",
                        tension: '0.4',
                        pointRadius: "0",
                        pointHoverRadius: 0
                    }
                ]
            });
        };
    
        fetchData();
    }, []);

  return (
    <div className='transaction-graph'>
        
        <div className='chart'> 

        {chartData && chartData.datasets && (

              <Line
              data={chartData}
              options={{
                responsive: true,
                
                plugins: {
                    legend: false,
                   
                },
                scales: {
                  y: {
                   
                    display: false,
                    ticks: {
                        display: false
                    },

                    grid: {
                        drawOnChartArea: false,
                        drawBorder: false,
                        drawTicks: false,
                        display: false
                        
                    },
                   
                  },

                  x: {
                   
                    grid: {
                        drawOnChartArea: false,
                        lineWidth: 3,
                        drawBorder: false,
                        display: false,
                       }
   
                  },
                  
                },

              }}
            />
        )}
          
        </div>

    </div>
  )
}

export default TransactionGraph