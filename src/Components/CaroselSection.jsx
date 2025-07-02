import { carousel } from "../../dummy-data/dummy-data";
import Carousel from "../Components/Carousel";
function CaroselSection() {
  const data = carousel;
  console.log(data);
  return (
    <div className="bg-[#ff8172]">
      <Carousel>
        {data.map((data) => (
          <div className="m-auto flex flex-col items-center justify-center p-14 text-center md:max-w-[1200px] md:p-24">
            <h3 className="text-[2rem] font-bold text-white md:text-[3rem]">
              {data.title}
            </h3>
            <div className="my-4 flex items-center justify-center space-x-3">
              <img
                src={data.image}
                className="w-20 rounded-full border-5 border-red-300"
                alt=""
              />

              <p className="font-san text-white">{data.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CaroselSection;
