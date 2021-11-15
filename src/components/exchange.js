import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Exchange = ({
  setCryptoData,
  cryptodata,
  crypt1,
  crypt2,
  setCrypt1,
  setCrypt2,
}) => {
  const [cexchange, setCexchange] = useState(0);
  const [c1val, setC1val] = useState(1);
  const [c2val, setC2val] = useState(0);

  useEffect(() => {
    const getExchange = async () => {
      const config = {
        hostname: "rest.coinapi.io",
        path: `/v1/exchangerate/${crypt1}/${crypt2}`,
        headers: { "X-CoinAPI-Key": `${process.env.API_KEY}` },
      };
      const res = await axios.get(config);
      const data = res.json();
      setCexchange(data.rate);
    };

    getExchange();
  }, [crypt1, crypt2]);

  const handlec1 = (e) => {
    setCrypt1(e.target.value);
  };
  const handlec2 = (e) => {
    setCrypt1(e.target.value);
  };

  const handlecrypto1calc = (e) => {
    const value = e.target.value;
    setCrypt1(value);
    const convertedvalue = value * cexchange;
    setCrypt2(convertedvalue);
  };

  const handlecrypto2calc = (e) => {
    const value = e.target.value;
    setCrypt2(value);
    const convertedvalue = value / cexchange;
    setCrypt1(convertedvalue);
  };

  return (
    <div>
      <div>
        <Dropdown
          options={cryptodata}
          onChange={handlec1}
          value={crypt1}
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
      <div>
        <Dropdown
          options={cryptodata}
          onChange={handlec2}
          value={crypt2}
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
