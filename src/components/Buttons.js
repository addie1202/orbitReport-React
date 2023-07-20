import satData from "./components/satData";

const Buttons = (filterByType, setSat, displaySats) => {
  {displaySats.map((sat, id) => {
  return (
    <div>
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    </div>
  );
})}
return(
  <button onClick={() => setSat(satData)}>
    All Orbits
    </button>
)
};

export default Buttons;