import React, { useContext } from "react";
import "./NavBar.css";
import { DataContext } from "../services/DataContext";

const NavBar = () => {
  const sortedData = useContext(DataContext);

  const uniqueTags = Array.from(
    new Set(sortedData.flatMap((note) => note.tags))
  ).sort();

  return (
    <div className="navbar">
      <div className="navbarlist">
        {uniqueTags.map((tag, index) => (
          <a key={index} href={`#${tag}`} className="nav-item">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
