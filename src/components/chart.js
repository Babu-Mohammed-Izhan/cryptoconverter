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
        `https://cors-anywhere.herokuapp.com/https://api.coincap.io/v2/assets/${cryptoname}/history?interval=d1`,
        {
          auth: `${process.env.REACT_APP_COIN_API_KEY}`,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Accept-Encoding": "gzip",
          },
        }
      );
      const cdata = res.data.data;
      if (num === 1) {
        setcrpyt1chart(cdata);
      }
      if (num === 2) {
        setcrpyt2chart(cdata);
      }
    };
    getCurrencies(crypt1.id, 1);
    getCurrencies(crypt2.id, 2);
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
  }, [crypt1chart, crypt2chart]);

  console.log(chartdata);

  return (
    <div className="max-h-full">
      <ResponsiveContainer width="100%" height="100%">
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
        ) : null}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
