import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './newsCard';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(
        'https://newsdata.io/api/1/news?apikey=pub_4477531bf3845c78f495be527da0375acb6a&category=business&q=crypto'
      );
      setNews(res.data.results);
    };
    getNews();
  }, []);
  return (
    <section className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Crypto News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-10">
        {news.map((n) => {
          return <NewsCard key={n.title} data={n} />;
        })}
      </div>
    </section>
  );
};

export default News;
