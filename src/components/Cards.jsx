import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="card">
      <form action="#">
        <input
          type="text"
          name="card-title"
          id="card-title"
          placeholder="Title"
        />
        <input
          type="text"
          name="card-notes"
          id="card-notes"
          placeholder="Take a Note"
        />
      </form>
    </div>
  );
};

export default Cards;
