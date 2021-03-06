import { useState } from 'react';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Card from './cryptoCard';

const Exchange = ({ cryptodata, crypt1, crypt2, setCrypt1, setCrypt2 }) => {
  // const cryptdata = cryptodata.map((d) => d.name);

  const [c1val, setC1val] = useState(1);
  const [c2val, setC2val] = useState(0);
  const [first, setFirst] = useState(true);

  const handlec1 = (name) => {
    const c1 = cryptodata.find((c) => c.name === name);
    const value = c2val;
    const convertedvalue =
      (value * Number(crypt2.priceUsd)) / Number(c1.priceUsd);
    setC1val(convertedvalue);
    setCrypt1(c1);
    setFirst(false);
  };
  const handlec2 = (name) => {
    const c2 = cryptodata.find((c) => c.name === name);
    const value = c1val;
    const convertedvalue =
      (value * Number(crypt1.metrics.market_data.price_usd)) /
      Number(c2.metrics.market_data.price_usd);
    setC2val(convertedvalue);
    setCrypt2(c2);
    setFirst(true);
  };

  const handlecrypto1calc = (e) => {
    const value = e.target.value;
    const convertedvalue =
      (value * Number(crypt1.metrics.market_data.price_usd)) /
      Number(crypt2.metrics.market_data.price_usd);
    setC2val(convertedvalue);
    setC1val(value);
  };

  const handlecrypto2calc = (e) => {
    const value = e.target.value;
    const convertedvalue =
      (value * Number(crypt2.metrics.market_data.price_usd)) /
      Number(crypt1.metrics.market_data.price_usd);
    setC1val(convertedvalue);
    setC2val(value);
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-4 w-full h-28 mt-6">
        <div className="flex flex-col justify-between h-full">
          {/* <Dropdown
            options={cryptdata}
            onChange={handlec1}
            value={crypt1.name}
          /> */}
          <h1 className="text-center text-2xl">{crypt1.name}</h1>
          <input
            className=" opacity-75 shadow-lg appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
            type="number"
            value={c1val}
            onChange={handlecrypto1calc}
            name="c1"
            id="c1"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          {/* <Dropdown
            options={cryptdata}
            onChange={handlec2}
            value={crypt2.name}
          /> */}
          <h1 className="text-center text-2xl">{crypt2.name}</h1>
          <input
            className=" opacity-75 shadow-lg appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
            type="number"
            value={c2val}
            onChange={handlecrypto2calc}
            name="c2"
            id="c2"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-20 gap-y-10">
        {cryptodata.map((c) => {
          return (
            <div
              onClick={() => {
                first ? handlec1(c.name) : handlec2(c.name);
              }}
              key={c.name}
            >
              <Card
                cryptData={c}
                red={c.name === crypt1.name}
                green={c.name === crypt2.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exchange;
