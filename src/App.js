import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Exchange from './components/exchange';
import Chart from './components/chart';
import axios from 'axios';
import Home from './components/homepage';
import About from './components/about';
import News from './components/news';

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [crypt1, setCrypt1] = useState({
    id: '1e31218a-e44e-4285-820c-8282ee222035',
    symbol: 'BTC',
    name: 'Bitcoin',
    slug: 'bitcoin',
    metrics: {
      market_data: {
        price_usd: 48596.09705550145,
        price_btc: 1,
        price_eth: 11.995926953870985,
      },
    },
  });
  const [crypt2, setCrypt2] = useState({
    id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
    symbol: 'ETH',
    name: 'Ethereum',
    slug: 'ethereum',
    metrics: {
      market_data: {
        price_usd: 4047.346203359393,
        price_btc: 0.08328541690780088,
        price_eth: 1,
      },
    },
  });

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await axios.get('https://data.messari.io/api/v2/assets', {
        params: {
          limit: 70,
        },
      });
      const cryptdata = res.data.data;
      setCryptoData(cryptdata);
    };
    getCurrencies();
  }, []);

  const links = [
    { link: '/', name: 'Convert', icon: 'bx-transfer' },
    { link: '/news', name: 'News', icon: 'bx-news' },
    { link: '/about', name: 'About', icon: 'bx-info-circle' },
  ];
  return (
    <body className="leading-normal tracking-normal text-indigo-500">
      <div className="h-full">
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />

        <div className="fixed h-full flex flex-row bg-gray-100">
          <div className="flex flex-col w-20 md:w-56 bg-gray-50 overflow-hidden">
            <div className="flex items-center justify-center h-20 shadow-md">
              <Link
                className="flex items-center text-indigo-500 no-underline hover:no-underline font-bold text-xs md:text-3xl"
                to="/"
              >
                CryptoHub
              </Link>
            </div>
            <ul className="flex flex-col py-4">
              {links.map((l) => {
                return (
                  <li>
                    <Link
                      to={`${l.link}`}
                      className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                    >
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400 mx-auto md:mx-0">
                        <i className={`bx ${l.icon}`}></i>
                      </span>
                      <span className="hidden md:inline text-sm font-medium">
                        {l.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="ml-20 md:ml-56">
          <div className="flex justify-end content-center">
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
          <div className="my-10 h-full mr-1 mx-auto">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route
                path="/"
                element={
                  <>
                    <Chart crypt1={crypt1} crypt2={crypt2} />
                    <Exchange
                      setCryptoData={setCryptoData}
                      cryptodata={cryptoData}
                      crypt1={crypt1}
                      setCrypt1={setCrypt1}
                      crypt2={crypt2}
                      setCrypt2={setCrypt2}
                    />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
