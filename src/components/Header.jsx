import React from "react";
import "./Header.css";
import noteslogo from "../assets/noteslogo.png";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle the search query here, such as making an API call
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className="header">
      <div className="menubox">
        <i class="fa-solid fa-bars fa-2x"></i>
      </div>

      <div className="logobox">
        <img src={noteslogo} alt="notes logo" />
        <h2>Notes</h2>
      </div>

      <div className="searchbox">
        <form onSubmit={handleSearchSubmit} style={searchBoxStyle}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Search
          </button>
        </form>
      </div>

      <div className="avatorBox" style={avatarContainerStyle}>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          style={avatarStyle}
        />
      </div>
    </div>
  );
};

// Simple inline styles (you can replace with CSS or a CSS framework like Bootstrap or Tailwind)
// const headerStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "10px 20px",
//   backgroundColor: "#333",
//   color: "#fff",
// };

const searchBoxStyle = {
  display: "flex",
  alignItems: "center",
};

const inputStyle = {
  padding: "5px 10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginRight: "5px",
};

const buttonStyle = {
  padding: "5px 10px",
  borderRadius: "4px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

// avator
const avatarContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
};

const avatarStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "2px solid white",
};

export default Header;
