import React from "react";
import "./MainSection.css";
import TakeNote from "./TakeNote";
import Cards from "./Cards";
import { fetchData } from "../services/noteService";

const MainSection = () => {
  return (
    <div className="mainsection-container">
      <div className="takenote-container">
        <TakeNote />
      </div>
      <div className="cardsholder-container">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default MainSection;
