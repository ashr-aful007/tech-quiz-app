import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


function Statistics() {
  const quizzdata = useLoaderData()
  const data = quizzdata.data
  return (
    <div>
              <div className=" flex justify-center w-3/4 overflow-hidden color-blue-900 h-screen mt-20">
            <LineChart width={400} height={400} data={data}>
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>

    </div>
  )
}

export default Statistics