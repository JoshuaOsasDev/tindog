import { FaApple, FaAppStore, FaGooglePlay } from "react-icons/fa";

function Hero() {
  return (
    <div className="mt-20 flex h-fit flex-col items-center justify-center space-y-7 p-7 md:flex-row">
      <div className="flex flex-col items-start space-y-5">
        <h1 className="max-w-sm font-mono text-[3.1rem]/20 font-extrabold text-white">
          Meet new and interesting dogs nearby
        </h1>

        <div className="flex justify-center space-x-5">
          <button className="bg-black px-4 py-3 text-white opacity-90 transition-opacity delay-200 hover:opacity-100">
            <span>
              <FaApple className="text-[1.5rem]" />
            </span>{" "}
            <span>Download</span>
          </button>

          <button className="border border-white bg-transparent px-4 py-3 text-[#f8f9fa] transition-colors delay-200 hover:bg-white hover:text-black">
            <span>
              <FaGooglePlay className="mr-2 text-[1.5rem]" />
            </span>{" "}
            Download
          </button>
        </div>
      </div>
      <img
        src="/tindog-no-bg.png"
        alt=""
        className="w-72 mix-blend-multiply drop-shadow-xl transition-transform duration-500 hover:scale-105 md:w-96"
      />
    </div>
  );
}

export default Hero;
