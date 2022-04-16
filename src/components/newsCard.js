const NewsCard = ({ data }) => {
  return (
    <a href={data.link} target="_blank" rel="noreferrer">
      <div className="border-2 border-indigo-600 p-5 h-40 rounded-md">
        <p className="text-xs mb-4">{data.pubDate.slice(0, 10)}</p>
        <h1 className="font-bold text-indigo-600">{data.title}</h1>
      </div>
    </a>
  );
};

export default NewsCard;
