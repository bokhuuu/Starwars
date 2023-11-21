import React from "react";

interface PlanetProps {
  planet: {
    name: string;
    population: string;
    terrain: string;
  };
}

const Planet: React.FC<PlanetProps> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>population - {planet.population}</p>
      <p>terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
