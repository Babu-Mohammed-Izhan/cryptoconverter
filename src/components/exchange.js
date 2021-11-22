import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Exchange = ({ cryptodata, crypt1, crypt2, setCrypt1, setCrypt2 }) => {
  const cryptdata = cryptodata.map((d) => d.id);

  const [c1val, setC1val] = useState(1);
  const [c2val, setC2val] = useState(0);

  const handlec1 = (e) => {
    const c1 = cryptodata.find((c) => c.id === e.value);
    setCrypt1(c1);
  };
  const handlec2 = (e) => {
    const c2 = cryptodata.find((c) => c.id === e.value);
    setCrypt2(c2);
  };

  const handlecrypto1calc = (e) => {
    const value = e.target.value;
    const convertedvalue =
      (value * Number(crypt1.priceUsd)) / Number(crypt2.priceUsd);
    setC2val(convertedvalue);
    setC1val(value);
  };

  const handlecrypto2calc = (e) => {
    const value = e.target.value;
    const convertedvalue =
      (value * Number(crypt2.priceUsd)) / Number(crypt1.priceUsd);
    setC1val(convertedvalue);
    setC2val(value);
  };
  return (
    <div className="flex items-center justify-center gap-4 w-full h-28">
      <div className="flex flex-col justify-between h-full">
        <Dropdown
          className=" opacity-75"
          options={cryptdata}
          onChange={handlec1}
          value={crypt1.id}
          placeholder="Select an crypto"
        />
        <input
          className=" opacity-75 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="number"
          value={c1val}
          onChange={handlecrypto1calc}
          name="c1"
          id="c1"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <Dropdown
          className=" opacity-75"
          options={cryptdata}
          onChange={handlec2}
          value={crypt2.id}
          placeholder="Select an crypto"
        />
        <input
          className=" opacity-75 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="number"
          value={c2val}
          onChange={handlecrypto2calc}
          name="c2"
          id="c2"
        />
      </div>
    </div>
  );
};

export default Exchange;
