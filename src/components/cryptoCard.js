const Card = ({ cryptData, green, red }) => {
  return (
    <div
      className={` ${red ? 'border-4 border-red-500' : ''} ${
        green ? 'border-4 border-green-500' : ''
      } flex items-center justify-center flex-col bg-purple-200 w-36 h-36 mx-auto rounded cursor-pointer shadow`}
    >
      <h1 className="text-black font-bold text-center">{cryptData.symbol}</h1>
      <h2 className="text-black mt-2 text-center">{cryptData.name}</h2>
    </div>
  );
};

export default Card;
