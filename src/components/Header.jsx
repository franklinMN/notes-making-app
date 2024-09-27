import React from "react";
import "./Header.css";
import noteslogo from "../assets/noteslogo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="menubox">
        <i class="fa-solid fa-bars fa-2x"></i>
      </div>
      <div className="logobox">
        <img src={noteslogo} alt="notes logo" />
        <h2>Notes</h2>
      </div>
      <div className="searchbox">searchbox</div>
      <div className="userbox">userbox</div>
    </div>
  );
};

export default Header;
