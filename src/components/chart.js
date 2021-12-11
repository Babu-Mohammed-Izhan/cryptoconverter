import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
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
        `https://data.messari.io/api/v1/assets/${cryptoname}/metrics/price/time-series`
      );
      const cdata = res.data.data.values;
      console.log(res.data.data, num);
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
              [`number`]: idx,
              [`${crypt1.name}`]: c[3],
              [`${crypt2.name}`]: crypt2chart[idx][3],
            };
          }

          return cdata;
        });
      setchartdata(finaldata);
    }
  }, [crypt1.name, crypt1chart, crypt2.name, crypt2chart]);

  console.log(chartdata);

  return (
    <div className="max-h-full">
      {chartdata[0] && (
        <ResponsiveContainer height={350} width="100%">
          <LineChart
            data={chartdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="number" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Line dataKey={`${crypt1.name}`} stroke="#fc0303" dot={false} />
            <Line dataKey={`${crypt2.name}`} stroke="#1cfc03" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;
