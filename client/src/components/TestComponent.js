import {React, useEffect, useState, PureComponent } from 'react'
import { Button } from '@mui/material'
import { addPost } from '../features/studentSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const TestComponent = () => {

  function createData(date, score) {
    return { date, score }
  }


  const data = [
   createData('01/01/21', '80'),
   createData('01/04/21', '75'),
   createData('01/22/21', '70'),
   createData('02/01/21', '88'),
   createData('02/14/21', '90'),
   createData('03/05/21', '93'),
   createData('03/16/21', '99')
  ];

  
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="score">
          <Label
              angle={270}
              position="left"
              
            >
              Score (%)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#0F92FE" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  )
}



export default TestComponent

