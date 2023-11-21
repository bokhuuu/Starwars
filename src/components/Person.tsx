import React from "react";

interface PersonProps {
  person: {
    name: string;
    gender: string;
    birth_year: string;
  };
}

const Planet: React.FC<PersonProps> = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>population - {person.gender}</p>
      <p>terrain - {person.birth_year}</p>
    </div>
  );
};

export default Planet;
