import { Grid } from '@mui/material'
import React from 'react'
import { Bar } from 'react-chartjs-2'

const labels = ["a","b","c","d","e","f","g"]
const data = {
  labels: labels,
  datasets: [{
    label: 'Services',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Service and Scubscribers',
      },
    },
  };
export const BarChart = () => {
  return (
    <Grid container direction="column" alignItems="center">
        <div style={{position:'relative', width:'100%', height:'100%'}}>
            <Bar
                data={data}
                options={options} 
            />
        </div>
    </Grid>
  )
}