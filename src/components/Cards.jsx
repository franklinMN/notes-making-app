import React from "react";
import { useEffect, useRef } from "react";
import "./Cards.css";

const Cards = ({ note }) => {
  const titleRef = useRef(null);
  const notesRef = useRef(null);

  const autoResize = (ref) => {
    if (ref.current) {
      ref.current.style.height = "auto"; // Reset height to auto to calculate new height
      ref.current.style.height = `${Math.min(ref.current.scrollHeight, 200)}px`; // Set to scroll height with max height
    }
  };

  useEffect(() => {
    autoResize(titleRef);
    autoResize(notesRef);
  }, [note.title, note.notes]); // Runs when note title or notes change

  return (
    <div className="card" style={{ backgroundColor: note.cardBackgroundColor }}>
      <h6>{note.title}</h6>
      <hr></hr>
      <p>{note.notes}</p>

      <div className="tags-container">
        {note.tags.map((tag, index) => (
          <span key={index} className="tagname">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Cards;
