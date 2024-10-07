import React, { useContext } from "react";
import "./MainSection.css";
import TakeNote from "./TakeNote";
import Cards from "./Cards";
// import { useEffect, useState } from "react";
// import { fetchData } from "../services/noteService";
import { DataContext } from "../services/DataContext";

const MainSection = () => {
  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   const loadNotes = async () => {
  //     try {
  //       const notesData = await fetchData();
  //       setNotes(notesData);
  //     } catch (error) {
  //       console.error("Error loading notes:", error);
  //     }
  //   };

  //   loadNotes();
  // }, []);

  // const sortedNotes = [...notes].sort(
  //   (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate)
  // );

  const { data, selectedTag } = useContext(DataContext);

  const filteredNotes = selectedTag
    ? data.filter((note) => note.tags.includes(selectedTag))
    : data;

  return (
    <div className="mainsection-container">
      <div className="takenote-container">
        <TakeNote />
      </div>
      <div className="cardsholder-container">
        {filteredNotes.map((note) => (
          <Cards key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
