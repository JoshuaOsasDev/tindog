import NavBar from "./NavBar";
import ProductHomeOperation from "./ProductHomeOperation";
import ProductSection from "./ProductSection";

function ProductHome() {
  
  return (
    <div className="min-h-screen bg-gray-200">
      

      <NavBar />
      <div className="mt-20 relative flex h-52 flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-blue-500">
        <h1 className="text-2xl font-bold text-white">
          Meet Your Furry Friend!
        </h1>

        <span className="ml-54 text-left text-gray-50 italic">yo! cheer</span>
        <div className="absolute bottom-4 md:top-1/3 md:right-2">
          <ProductHomeOperation />
        </div>
      </div>

      <ProductSection />
    </div>
  );
}

export default ProductHome;
