const Home = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <h1 className="text-4xl md:text-5xl lg:text-7xl  mb-6 font-bold">
        CryptoHub
      </h1>
      <p className="text-md md:text-lg lg:text-2xl font-bold">
        All your crypto needs in one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 mt-20">
        <div className="flex items-center justify-center flex-col p-5 px-10">
          <h1 className="text-md md:text-lg lg:text-3xl font-bold">Convert</h1>
          <h2 className="md:text-md lg:text-xl font-semibold text-center">
            Compare many cryptocurrencies with the latest values.
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col p-5 px-10">
          <h1 className="text-md md:text-lg lg:text-3xl font-bold">News</h1>
          <h2 className="md:text-md lg:text-xl font-semibold text-center">
            All the latest crypto news in one place
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
