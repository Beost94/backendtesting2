import { useEffect, useState } from "react";

interface FilterProps {
  category: string | undefined;
  onFilterChange: (filters: { [key: string]: string[] }) => void;
}

interface FilterOption {
  filterOption: string;
  filterValues: string[];
}

function Filter(props: FilterProps) {
  const [filters, setFilters] = useState<FilterOption[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    if (props.category === undefined) {
      return;
    }

    fetch(
      "http://localhost:8080/products/filteroptions?category=" + props.category
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setFilters(data);
      })
      .catch(function (error) {
        console.error("Failed to fetch filters", error);
      });
  }, [props.category]);

  function handleCheckboxChange(
    filterName: string,
    value: string,
    checked: boolean
  ) {
    const newSelected = { ...selectedFilters };

    if (newSelected[filterName] === undefined) {
      newSelected[filterName] = [];
    }

    if (checked) {
      newSelected[filterName].push(value);
    } else {
      const index = newSelected[filterName].indexOf(value);
      if (index !== -1) {
        newSelected[filterName].splice(index, 1);
      }
    }

    setSelectedFilters(newSelected);
    props.onFilterChange(newSelected);
  }

  return (
    <div>
      <h2>Filter for category: {props.category}</h2>

      {filters.map(function (filter) {
        return (
          <div key={filter.filterOption}>
            <h3>{filter.filterOption}</h3>

            <div>
              {filter.filterValues.map(function (value) {
                let isChecked = false;
                if (
                  selectedFilters[filter.filterOption] !== undefined &&
                  selectedFilters[filter.filterOption].includes(value)
                ) {
                  isChecked = true;
                }

                return (
                  <div key={value}>
                    <label>
                      <input
                        type="checkbox"
                        value={value}
                        checked={isChecked}
                        onChange={function (e) {
                          handleCheckboxChange(
                            filter.filterOption,
                            value,
                            e.target.checked
                          );
                        }}
                      />
                      {value}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
