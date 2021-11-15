import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Exchange = ({ cryptodata, crypt1, crypt2, setCrypt1, setCrypt2 }) => {
  const cryptdata = cryptodata.map((d) => d.id);

  const [c1val, setC1val] = useState(1);
  const [c2val, setC2val] = useState(0);

  const handlec1 = (e) => {
    const c1 = cryptodata.filter((c) => c.id === e.value);
    setCrypt1(c1);
  };
  const handlec2 = (e) => {
    const c2 = cryptodata.filter((c) => c.id === e.value);
    setCrypt2(c2);
  };

  const handlecrypto1calc = (e) => {
    const value = e.target.value;
    const convertedvalue =
      (value * Number(crypt1.priceUsd)) / Number(crypt2.priceUsd);
    console.log(convertedvalue);
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
    <div className="flex items-center justify-center">
      <div className="h-40">
        <Dropdown
          options={cryptdata}
          onChange={handlec1}
          value={crypt1.id}
          placeholder="Select an crypto"
        />
        <input
          type="number"
          value={c1val}
          onChange={handlecrypto1calc}
          name="c1"
          id="c1"
        />
      </div>
      <div className="h-40">
        <Dropdown
          options={cryptdata}
          onChange={handlec2}
          value={crypt2.id}
          placeholder="Select an crypto"
        />
        <input
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
