function App2() {
  return (
    <div className="bg-pale_orange flex justify-center">
      <main className="font-josefin md: m-10 w-full max-w-xs bg-white p-3 font-extralight md:grid md:max-w-3xl md:grid-cols-2 md:gap-7">
        <div
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36, 42, 46, 0.7), rgba(36, 42, 46, 0.8)), url(/palace2.jpg)",
          }}
        >
          {/* <img src="/orange.png" alt="" className="h-60 md:h-full" /> */}
        </div>
        <div className="">
          <h1 className="font-title mt-2 text-2xl font-extrabold uppercase md:mt-1 md:text-[16px]">
            A single orange
          </h1>
          <p className="font-title uppercase">with stem and leaf</p>
          <h2 className="my-2 text-5xl md:my-1 md:text-4xl">
            $1<span className="text-base">.35</span>
          </h2>
          <p className="font-extralight text-gray-400">
            Experience a burst of sunshine in every bite with this hand-picked,
            sun-drenched jewel of the citrus world.
          </p>
          <div className="flex items-center space-x-1">
            <button className="from-light_orange to-main_orange my-5 h-10 flex-grow rounded-sm bg-gradient-to-b py-2 text-white uppercase hover:bg-gradient-to-t md:my-3.5">
              Add to Cart
            </button>
            <svg
              class="m-auto h-12 w-10 fill-orange-200"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          </div>
          <h3 className="my-2 mt-4 text-[20px] font-extralight text-gray-500 uppercase">
            Features
          </h3>
          <ul className="marker:text-main_orange mx-1.5 max-w-100 list-disc pl-4 font-extralight text-gray-500">
            <li className="">
              <span className="font-bold">Nature's candy</span>: A symphony of
              sweet and tangy notes
            </li>
            <li>
              <span className="font-bold">Vibrant hue</span>: A visual feast for
              the eyes
            </li>
            <li>
              <span className="font-bold">Invigorating aroma</span>: A sensory
              delight
            </li>
            <li>
              <span className="font-bold">Nutrient-rich</span>: Bursting with
              Vitamin C
            </li>
            <li>
              <span className="font-bold">Perfect for</span>: snacking, juicing,
              or culinary creations
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App2;
