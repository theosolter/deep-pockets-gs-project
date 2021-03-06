import React, { useState } from "react";
import { LineGraph } from "../../components/LineGraph";

const investmentCategories =  [
  {
    "category": "Energy",
    "minimum": "5",
    "data": [
      "17",
      "9",
      "21",
      "44",
      "-4",
      "20",
      "26",
      "15.1",
      "33",
      "26"
    ]
  },
  {
    "category": "Technology",
    "minimum": "6",
    "data": [
      "15",
      "22",
      "13.6",
      "-3",
      "17",
      "20",
      "12.2",
      "19.3",
      "-4",
      "7"
    ]
  },
  {
    "category": "Financial Services",
    "minimum": "4",
    "data": [
      "11",
      "16",
      "55.2",
      "12",
      "-17",
      "20",
      "26.1",
      "9.67",
      "30",
      "3"
    ]
  },
  {
    "category": "Real Estate",
    "minimum": "15",
    "data": [
      "19",
      "-6",
      "0.5",
      "13",
      "17.3",
      "20.8",
      "82.4",
      "15.2",
      "33",
      "14"
    ]
  },
  {
    "category": "Pharmaceuticals",
    "minimum": "10",
    "data": [
      "21",
      "15",
      "21",
      "32",
      "-2",
      "34.2",
      "26",
      "15.4",
      "25.7",
      "5"
    ]
  },
  {
    "category": "Airline",
    "minimum": "10",
    "data": [
      "12",
      "14",
      "12.6",
      "5",
      "6.7",
      "20",
      "7",
      "12",
      "23.4",
      "10"
    ]
  },
  {
    "category": "Retail",
    "minimum": "10",
    "data": [
      "5",
      "-11",
      "24.5",
      "-6.5",
      "13",
      "21",
      "11.6",
      "7.6",
      "14",
      "11"
    ]
  },
  {
    "category": "Gaming",
    "minimum": "12",
    "data": [
      "21",
      "-11",
      "16.4",
      "-6.5",
      "7.7",
      "21",
      "11.6",
      "-5",
      "10",
      "18"
    ]
  }
]

const mock = [11506, 13260, 15428, 17959, 21077, 25041, 29787, 34898, 41382, 48824];

const ForecasterHome = () => {
  const [lineGraphData, setLineGraphData] = useState(mock);
  const [tableData, setTableData] = useState(investmentCategories)
  const fetchForecast = () => {
    // call setLineGraphData on response from fetch
    fetch('http://localhost:3000/api/v1/forecast') // replace this with url for data
    .then(response => response.json())
    .then(data => setLineGraphData(data));
  };

  function updateTableData(index, update) {
    tableData[index] = update
    setTableData(tableData)
  }

  return (
    <>
        <div>
          <h3>Investment Forecaster</h3>
          <p>This page allows you to customize your investments and view the potential growth of <b>$100,000</b> over a period of <b>10 years</b>.</p>
          <br></br>
          <LineGraph data={lineGraphData}/>
          <br></br>
          <h4>Investment Allocations</h4>
          <br></br>
        </div>
        
    </>
  );
};

export default ForecasterHome;
