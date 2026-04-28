import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || options.at(0).value;

  function handleChange(event) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sortBy", event.target.value);
    setSearchParams(newParams);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    >
      <label htmlFor="sort">Sort by</label>
      <select name="sort" id="sort">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Select>
  );
}

export default SortBy;
