import { useSearchParams } from "react-router";

function SortBy({ options, value }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e) => {
    searchParams.set(value, e.target.value);
    setSearchParams(searchParams) || "";
  };
  return (
    <select
      value={options.value}
      onChange={handleChange}
      className="text-md rounded-sm border-0 border-gray-400 bg-gray-200 p-1 text-gray-800 ring-2 ring-gray-500 focus:ring-3 focus:outline-none"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
