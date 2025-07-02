import { HiMiniXCircle } from "react-icons/hi2";
import { useContent } from "../../Context/useContent";
import Form from "./Form";
import ConfirmModal from "./ConfirmModal";
import Spinner from "../Components/Spinner";

import { useSearchParams } from "react-router";
import { useGetDogs } from "./useFecthData";

function ProductSection() {
  const {
    dogs: dog,
    toggleLike,
    showDogForm,
    setShowDogForm,
    isLoading: isLoadingLike,
  } = useContent();

  const { isLoading } = useGetDogs();

  const [searchParams] = useSearchParams();

  const sortedValue = searchParams.get("sortBy") || "all";
  const [field, direction] = sortedValue.split("-");
  // console.log(field, direction);

  let dogs;

  dogs = [...dog].sort((a, b) => {
    if (field === "all" || !field) return 0;

    const aValue = a[field];
    const bValue = b[field];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "desc" ? bValue - aValue : aValue - bValue;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "desc"
        ? bValue.localeCompare(aValue)
        : aValue.localeCompare(bValue);
    }

    return 0;
  });

  // console.log(dogs, "dogs");

  if (isLoading) return <Spinner color="blue" />;

  return (
    <div className="flex flex-col items-center bg-[#fffaf6] p-6 font-sans md:p-10">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {dogs.map((dog) => (
          <section
            key={dog.name} // Always use a unique key in map()
            className="w-full overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow hover:shadow-2xl"
          >
            <img
              src={dog.image}
              alt={dog.name}
              className="h-64 w-full object-cover"
            />

            <div className="space-y-3 p-6">
              <h1 className="text-3xl font-bold text-pink-600">{dog.name}</h1>
              <p className="text-lg text-gray-700">
                <span className="font-medium">Breed:</span> {dog.breed}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-medium">Age:</span> {`${dog.age} years`}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-medium">Location:</span>{" "}
                {`${dog.state}, ${dog.country}`}
              </p>
              <p className="text-gray-600">{dog.bio}</p>

              <div className="flex flex-wrap gap-2 pt-4">
                <button className="rounded-full bg-pink-500 px-4 py-2 text-white transition hover:bg-pink-600">
                  ❤️ Match
                </button>
                <button className="rounded-full border border-pink-500 px-4 py-2 text-pink-600 hover:bg-pink-50">
                  🐾 Message
                </button>
                <ConfirmModal
                  onConfirm={() => setShowDogForm(dog)}
                  dogImage={dog.imagemage}
                />
                <button
                  disabled={isLoadingLike}
                  onClick={() => toggleLike(dog.id)}
                  className={`rounded-full border-1 px-4 py-2 text-gray-400 ${
                    dog.likes
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border border-gray-300 text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {dog.likes ? "👎 unlike" : "👍 Like "}
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
      {showDogForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-93">
          <div className="relative w-full max-w-88 rounded-xl bg-white p-6 opacity-100 shadow-lg md:max-w-lg">
            <button
              onClick={() => setShowDogForm(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <HiMiniXCircle />
            </button>
            <Form dog={showDogForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSection;
