import React, { useContext } from "react";
import "./NavBar.css";
import { DataContext } from "../services/DataContext";

const NavBar = () => {
  const { setSelectedTag } = useContext(DataContext);
  const { uniqueTags } = useContext(DataContext);

  // const uniqueTags = Array.from(
  //   new Set(data.flatMap((note) => note.tags))
  // ).sort();

  return (
    <div className="navbar">
      <div className="navbarlist">
        <button onClick={() => setSelectedTag(null)} className="nav-item">
          All Notes
        </button>
        {uniqueTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className="nav-item"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
