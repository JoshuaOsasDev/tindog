import { FaCheckCircle, FaBullseye, FaHeart } from "react-icons/fa";
function List() {
  return (
    <div className="px-17 py-10">
      <ul className="flex flex-col items-center justify-center space-y-3 md:m-auto md:my-5 md:max-w-4xl md:flex-row md:space-x-6 md:text-center">
        <li className="my-3 flex flex-col items-center justify-center">
          <p>
            <FaCheckCircle className="mt-6 pb-2 text-[5rem] text-[#ef8172] hover:text-[#ff4c68]" />
          </p>
          <h3 className="font-mono text-2xl font-bold">Easy to use</h3>
          <p className="font-san text-center text-lg font-light text-gray-700">
            So easy to use, even your dog could do it.
          </p>
        </li>

        <li className="my-3 flex flex-col items-center justify-center">
          <p>
            <FaBullseye className="mt-6 pb-2 text-[5rem] text-[#ef8172] hover:text-[#ff4c68]" />
          </p>
          <h3 className="font-mono text-2xl font-bold">Elite Clientele</h3>
          <p className="font-san text-center text-lg font-light text-gray-700">
            We have all the dogs, the greatest dogs.
          </p>
        </li>

        <li className="my-3 flex flex-col items-center justify-center text-center">
          <p>
            <FaHeart className="mt-6 cursor-pointer pb-2 text-[5rem] text-[#ef8172] hover:text-[#ff4c68]" />
          </p>
          <h3 className="font-mono text-2xl font-bold">Guaranteed to work.</h3>
          <p className="font-san text-lg font-light text-gray-700">
            Find the love of your dog's life or your money back.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default List;
