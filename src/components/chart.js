/* eslint-disable no-implied-eval */
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const Chart = ({ crypt1, crypt2 }) => {
  const [crypt1chart, setcrpyt1chart] = useState([]);
  const [crypt2chart, setcrpyt2chart] = useState([]);
  const [chartdata, setchartdata] = useState([]);
  useEffect(() => {
    const getCurrencies = async (cryptoname, num) => {
      const res = await axios.get(
        `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&ids=${cryptoname}&interval=30d&convert=USD&per-page=100&page=1`
      );
      const cdata = res.data.data;
      console.log(cdata);
      if (num === 1) {
        setcrpyt1chart(cdata);
      }
      if (num === 2) {
        setcrpyt2chart(cdata);
      }
    };
    getCurrencies(crypt1.symbol, 1);
    getCurrencies(crypt2.symbol, 2);
  }, [crypt1, crypt2]);

  useEffect(() => {
    if (crypt1chart && crypt2chart) {
      const finaldata =
        crypt1chart &&
        crypt1chart.map((c, idx) => {
          let cdata;
          if (crypt2chart.length > 0) {
            cdata = {
              date: c.date.slice(0, 10),
              [`${crypt1.id}`]: Math.round(c.priceUsd),
              [`${crypt2.id}`]: Math.round(crypt2chart[idx].priceUsd),
            };
          }

          return cdata;
        });
      setchartdata(finaldata);
    }
  }, [crypt1.id, crypt1chart, crypt2.id, crypt2chart]);

  return (
    <div className="max-h-full">
      <ResponsiveContainer>
        {chartdata.length > 0 ? (
          <LineChart
            width={500}
            height={700}
            data={chartdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={`${crypt1.id}`} stroke="#8884d8" />
            <Line type="monotone" dataKey={`${crypt2.id}`} stroke="#82ca9d" />
          </LineChart>
        ) : (
          <div></div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
