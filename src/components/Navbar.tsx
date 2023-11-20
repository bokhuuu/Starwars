import React from "react";

interface NavbarProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <div>
      <nav>
        <button onClick={() => setPage("planets")}>Planets</button>
        <button onClick={() => setPage("people")}>People</button>
      </nav>
    </div>
  );
};

export default Navbar;
