import React, { useEffect, createRef } from 'react'
import { Chart } from 'chart.js'

export const ReportsPage = () => {
    const canvasReference = createRef<HTMLCanvasElement>()
    useEffect(() => {
        const myChart = new Chart(canvasReference.current, {
            type: 'bar',
            data: {
                labels: [
                    'January', 
                    'February', 
                    'March', 
                    'April', 
                    'May', 
                    'June'
                ],
                datasets: [{
                    label: 'ETH Prices 2021',
                    data: [
                        300,
                        1300,
                        1400,
                        2300,
                        3300,
                        6300,
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            },
            // plugins: []
        })

        return () => {            
            myChart.destroy()
        }
    })

     return <div className="flexed stretched full-dim light-bg">
        <canvas ref={canvasReference}></canvas>
    </div>
}