import SortBy from "./SortBy";

function ProductHomeOperation() {
  return (
    <div className="">
      <SortBy
        value="sortBy"
        options={[
          { value: "name-asc", label: "Sort by name [A-Z]" },
          { value: "name-desc", label: "Sort by name [Z-A]" },

          { value: "age-asc", label: "Sort by age [Low first]" },
          { value: "age-desc", label: "Sort by age [High first]" },
        ]}
      />
    </div>
  );
}

export default ProductHomeOperation;
