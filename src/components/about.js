const About = () => {
  return (
    <div class="max-w-3xl mx-auto mt-20 ">
      <div class="relative flex items-start border-2 border-gray-200 rounded bg-white">
        <div class="text-center px-12 md:px-14 sm:py-8 pt-20 mx-10">
          <blockquote class="text-xl font-medium mb-4">
            CryptoHub is an all in one website where, users can check on crypto
            news, see the latest values of cryto currencies. You can compare
            different crypto currency values on this website.
          </blockquote>
          <blockquote class="text-lg font-medium mb-4">
            This website was created using React, TailwindCSS and uses third
            party APIs for data.
          </blockquote>
          <div class="text-gray-600">
            <a
              class="text-blue-600 hover:underline text-lg"
              href="https://izhan.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Izhan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
