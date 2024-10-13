import React, { useContext, useState } from "react";
import "./MainSection.css";
import TakeNote from "./TakeNote";
import Cards from "./Cards";
// import { useEffect, useState } from "react";
// import { fetchData } from "../services/noteService";
import { DataContext } from "../services/DataContext";
import EditCard from "./EditCard";

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
  const [isEditCard, setIsEditCard] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const filteredNotes = selectedTag
    ? data.filter((note) => note.tags.includes(selectedTag))
    : data;

  const handleEditNote = (note) => {
    setCurrentNote(note);
    setIsEditCard(true);
  };
  return (
    <div className="mainsection-container">
      {isEditCard && <EditCard note={currentNote} />}
      <div className="takenote-container">
        <TakeNote />
      </div>
      <div className="cardsholder-container">
        {filteredNotes.map((note) => (
          <Cards
            key={note.id}
            note={note}
            editCard={isEditCard}
            onEditClick={handleEditNote} // Pass a named prop
          />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
