import Coffee from "../components/Coffee";

function ListCoffee({ coffees }) {
  if (!coffees || coffees.length === 0) {
    return <div>No coffee available</div>;
  }

  const renderCoffees = coffees.map((coffee) => (
    <Coffee key={coffee.id} coffee={coffee} />
  ));

  return (
    <div className="container-buttons-components">
      <div className="container-components-coffee">{renderCoffees}</div>
    </div>
  );
}

export default ListCoffee;
