function SearchCoffees({ handleClick, handleClickAvailable }) {
  return (
    <div className="container-buttons">
      <button className="all-products" onClick={handleClick}>
        All Products
      </button>
      <button className="available-now" onClick={handleClickAvailable}>
        Available Now
      </button>
    </div>
  );
}

export default SearchCoffees;
