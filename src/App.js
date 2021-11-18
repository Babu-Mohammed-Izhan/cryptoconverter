import { useEffect, useState } from "react";
import Chart from "./components/chart";
import Exchange from "./components/exchange";
import axios from "axios";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [crypt1, setCrypt1] = useState({
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    priceUsd: "66238.4999614974995516",

  });
  const [crypt2, setCrypt2] = useState({
    id: "ethereum",
    rank: "2",
    symbol: "ETH",
    name: "Ethereum",
    priceUsd: "4743.5371566480356478",
  });

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await axios.get("https://api.coincap.io/v2/assets");

      const cryptdata = res.data.data;
      console.log(cryptdata);
      setCryptoData(cryptdata);
    };
    getCurrencies();
  }, []);

  return (
    <div className="App min-h-screen py-20 px-10">
      <Chart crypt1={crypt1} crypt2={crypt2} />
      <Exchange
        setCryptoData={setCryptoData}
        cryptodata={cryptoData}
        crypt1={crypt1}
        setCrypt1={setCrypt1}
        crypt2={crypt2}
        setCrypt2={setCrypt2}
      />
    </div>
  );
}

export default App;
