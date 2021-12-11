import { useEffect, useState } from "react";
import Exchange from "./components/exchange";
import Chart from "./components/chart";
import axios from "axios";
import macbook from "./assets/macbook.svg";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [crypt1, setCrypt1] = useState({
    id: "1e31218a-e44e-4285-820c-8282ee222035",
    symbol: "BTC",
    name: "Bitcoin",
    slug: "bitcoin",
    metrics: {
      market_data: {
        price_usd: 48596.09705550145,
        price_btc: 1,
        price_eth: 11.995926953870985,
        volume_last_24_hours: 10125619223.275263,
        real_volume_last_24_hours: 6088636119.426619,
        volume_last_24_hours_overstatement_multiple: 1.6630356987450938,
        percent_change_usd_last_1_hour: 0.20471307108859038,
        percent_change_btc_last_1_hour: 0,
        percent_change_eth_last_1_hour: -0.29755540863281615,
        percent_change_usd_last_24_hours: 1.487598806909187,
        percent_change_btc_last_24_hours: 0,
        percent_change_eth_last_24_hours: 1.9827588237046938,
        ohlcv_last_1_hour: {
          open: 48516.32516498222,
          high: 48648.50570128624,
          low: 48226.12827220048,
          close: 48598.10336893679,
          volume: 166198385.529315,
        },
        ohlcv_last_24_hour: {
          open: 48260.54256402426,
          high: 50136.26378513993,
          low: 46766.44087177553,
          close: 48596.09705550146,
          volume: 7030978651.854675,
        },
        last_trade_at: "2021-12-11T06:10:52.569Z",
      },
    },
  });
  const [crypt2, setCrypt2] = useState({
    id: "21c795f5-1bfd-40c3-858e-e9d7e820c6d0",
    symbol: "ETH",
    name: "Ethereum",
    slug: "ethereum",
    metrics: {
      market_data: {
        price_usd: 4047.346203359393,
        price_btc: 0.08328541690780088,
        price_eth: 1,
        volume_last_24_hours: 10850301414.796656,
        real_volume_last_24_hours: 6903054924.261704,
        volume_last_24_hours_overstatement_multiple: 1.5718115434170787,
        percent_change_usd_last_1_hour: 0.5037674670665908,
        percent_change_btc_last_1_hour: 0.2984434432398887,
        percent_change_eth_last_1_hour: 0,
        percent_change_usd_last_24_hours: -0.5765114269683952,
        percent_change_btc_last_24_hours: -2.0338546365696977,
        percent_change_eth_last_24_hours: 0,
        ohlcv_last_1_hour: {
          open: 4030.7874287282966,
          high: 4052.7806508205604,
          low: 4017.0462559063994,
          close: 4047.543685785931,
          volume: 122623819.8691236,
        },
        ohlcv_last_24_hour: {
          open: 4133.323487033106,
          high: 4235.054758805988,
          low: 3833.4847919854633,
          close: 4047.3462033593923,
          volume: 7712517985.199734,
        },
        last_trade_at: "2021-12-11T06:10:52.63Z",
      },
    },
  });

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await axios.get("https://data.messari.io/api/v2/assets", {
        params: {
          limit: 70,
        },
      });
      console.log(res);
      const cryptdata = res.data.data;
      setCryptoData(cryptdata);
    };
    getCurrencies();
  }, []);

  console.log(crypt1, "c1");
  console.log(crypt2, "c2");

  return (
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed bg-gray-900">
      <div className="h-full">
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              Rip
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                ple
              </span>
            </a>

            <div className="flex w-1/2 justify-end content-center">
              <a
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://twitter.com/babu_izhan"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Compare
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Crypto
              </span>
              in real time!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              There are over 100 crypto currencies that you can compare and get
              the accurate conversions for each crypto coin.
            </p>

            <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-blue-300 py-2 font-bold mb-2"
                  htmlFor="emailaddress"
                >
                  Signup for our newsletter
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  id="emailaddress"
                  type="text"
                  placeholder="you@somewhere.com"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="w-full xl:w-3/5 p-4 md:p-12 overflow-hidden relative">
            <img
              className="mx-auto w-full transform transition hover:scale-105 duration-700 ease-in-out"
              src={macbook}
              alt="macbook"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20px">
              <Exchange
                setCryptoData={setCryptoData}
                cryptodata={cryptoData}
                crypt1={crypt1}
                setCrypt1={setCrypt1}
                crypt2={crypt2}
                setCrypt2={setCrypt2}
              />
            </div>
          </div>
          <div className="h-96 w-full">
            <Chart crypt1={crypt1} crypt2={crypt2} />
          </div>

          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="/"
            >
              &copy; App 2021
            </a>
            - Created by
            <a
              className="text-gray-500 no-underline hover:no-underline px-1"
              href="https://babumohammedizhan.netlify.app/"
            >
              Babu Mohammed Izhan
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
