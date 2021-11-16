import React from 'react';
import './App.css';
import { PieChart, Pie } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const App = () => {
  const data = [
    {name: "Facebook", value: 200000},
    {name: "Twiter", value:1000000},
    {name: "Instagram", value:500000},
    {name: "Telegram", value:20000}
  ];

  return(
    <div style={{ textAlign: 'center'}}>
      <h1>Social media User</h1>
      <div  className="App">
    

    <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
          <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
     
          
        </div>
    </div>
  )
}

export default App;
