import { useEffect, useState } from "react";
import Chart from "./components/chart";
import Exchange from "./components/exchange";
import axios from "axios";

function App() {
  const [cryptoData, setCryptoData] = useState({});
  const [crypt1, setCrypt1] = useState("");
  const [crypt2, setCrypt2] = useState("");

  const getCurrencies = async () => {
    const res = await axios.get("api.coincap.io/v2/assets");

    const data = res.json();
    console.log(data.data);
    const cryptdata = data.data.map((d) => d.id);
    console.log(cryptdata);
    setCryptoData(cryptdata);
  };
  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="App">
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
