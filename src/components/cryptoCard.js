const Card = ({ cryptData }) => {
  return (
    <div className="flex items-center justify-center flex-col bg-purple-200 w-36 h-36 mx-auto rounded">
      <h1 className="text-black font-bold text-center">{cryptData.symbol}</h1>
      <h2 className="text-black mt-2 text-center">{cryptData.name}</h2>
    </div>
  );
};

export default Card;
