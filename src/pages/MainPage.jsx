import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MainSection from "../components/MainSection";
import "./MainPage.css";
import { useState, useContext } from "react";
import { DataContext } from "../services/DataContext";

const MainPage = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  // if data not fetched error checking
  const { error } = useContext(DataContext);

  const toggleNavBar = () => {
    setToggleMenu((prevState) => !prevState);
  };

  if (error) {
    return <div className="error-message">{error}</div>; // Display error message
  }

  return (
    <div className="mainpage">
      <Header onToggleNav={toggleNavBar} />
      <div className="main-container">
        {toggleMenu && <NavBar />}
        <MainSection />
      </div>
    </div>
  );
};

export default MainPage;
