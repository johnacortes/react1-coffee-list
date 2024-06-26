import { useState, useEffect } from "react";
import SearchCoffees from "./components/SearchCoffees";
import ListCoffee from "./pages/ListCoffee";
import SearchApi from "./components/Api";

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    const data = await SearchApi();
    console.log(data);
    setCoffees(data);

    const buttonA = document.querySelector(".available-now");
    buttonA.style.backgroundColor = "#1B1D1F";

    const buttonAll = document.querySelector(".all-products");
    buttonAll.style.backgroundColor = "#6F757C";
  };

  const handleClickAvailable = async () => {
    const data = await SearchApi();
    const data2 = data.filter((dat) => dat.available === true);
    console.log(data2);
    setCoffees(data2);

    const buttonA = document.querySelector(".available-now");
    buttonA.style.backgroundColor = "#6F757C";

    const buttonAll = document.querySelector(".all-products");
    buttonAll.style.backgroundColor = "#1B1D1F";
  };

  return (
    <div className="container-app">
      <div className="svg-vector">
        <svg
          width="257"
          height="153"
          viewBox="0 0 257 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04"
            stroke="#302522"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="header">
        <h1 className="h1-header">Our Collection</h1>
        <p className="p-header">
          Introducing our Coffee Collection, a selection of unique coffees
          <br /> from different roast types and origins, expertly roasted in
          small
          <br /> batches and shipped fresh weekly.
        </p>
      </div>

      <SearchCoffees
        handleClick={handleClick}
        handleClickAvailable={handleClickAvailable}
      />
      <ListCoffee coffees={coffees} />
    </div>
  );
}

export default App;
