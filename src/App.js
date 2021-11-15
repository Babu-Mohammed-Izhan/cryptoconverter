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
    supply: "18873700.0000000000000000",
    maxSupply: "21000000.0000000000000000",
    marketCapUsd: "1250165576723.3153572870329200",
    volumeUsd24Hr: "16224990561.2570202610105031",
    priceUsd: "66238.4999614974995516",
    changePercent24Hr: "2.9438483255247572",
    vwap24Hr: "64631.8995915065579974",
    explorer: "https://blockchain.info/",
  });
  const [crypt2, setCrypt2] = useState({
    id: "ethereum",
    rank: "2",
    symbol: "ETH",
    name: "Ethereum",
    supply: "118347843.3740000000000000",
    maxSupply: null,
    marketCapUsd: "561387392453.7310256906030277",
    volumeUsd24Hr: "9214051619.4384923109664854",
    priceUsd: "4743.5371566480356478",
    changePercent24Hr: "3.4024593209332630",
    vwap24Hr: "4614.0683975969618128",
    explorer: "https://etherscan.io/",
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
