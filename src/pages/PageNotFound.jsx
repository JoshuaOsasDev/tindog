import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();
  console.log(moveBack);
  return (
    <div className="mt-20 flex items-center justify-center text-center font-sans text-5xl font-bold">
      <h3>
        Page not found: <span className="text-red-600">404 Error</span>
        <button
          onClick={moveBack}
          className="pointer m-auto mt-5 rounded bg-blue-600 p-2 text-xl capitalize hover:bg-blue-700"
        >
          &larr; back
        </button>
      </h3>
    </div>
  );
}

export default PageNotFound;
