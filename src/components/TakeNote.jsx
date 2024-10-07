import React, { useState, useContext, useEffect, useRef } from "react";
import "./TakeNote.css";
import { DataContext } from "../services/DataContext";
import { submitNote } from "../services/noteService";

const TakeNote = () => {
  // value to be sent to backend on save
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [checkboxTags, setCheckboxTags] = useState([]);
  const [isPinned, setIsPinned] = useState(false);

  //
  //

  const [newtag, setNewtag] = useState([]);
  const { data, setData } = useContext(DataContext);
  const { uniqueTags, setUniqueTags } = useContext(DataContext);
  const [toggleTaglist, setToggleTaglist] = useState(false);

  const tagContainerRef = useRef(null);

  const colors = [
    "rgba(173, 216, 230, 1)",
    "rgba(255, 255, 224, 1)",
    "rgba(240, 128, 128, 1)",
    "rgba(144, 238, 144, 1)",
    "rgba(230, 230, 250, 1)",
  ];

  // Using useEffect to set unique tags when data changes
  useEffect(() => {
    if (data) {
      setUniqueTags(
        Array.from(new Set(data.flatMap((note) => note.tags))).sort()
      );
    }
  }, [data, setUniqueTags]); // This will run only when 'data' changes

  // Event listener to close the tag container when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tagContainerRef.current &&
        !tagContainerRef.current.contains(event.target)
      ) {
        setToggleTaglist(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tagContainerRef]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  // submit button---------------------------------------------------
  //
  //
  //
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Here you can handle the submission, e.g., save the note

    const dataJson = {
      title: title,
      notes: note,
      tags: checkboxTags,
      isPinned: isPinned,
      cardBackgroundColor: bgColor,
    };
    console.log(dataJson);

    try {
      const newNote = await submitNote(dataJson); // Call the service
      setData((prevData) => [newNote, ...prevData]); // Update the data context
      handleClearbutton(); // Clear the form after submission
    } catch (error) {
      console.error("Failed to submit note:", error);
    }
  };

  //clear button---------------------------------------------------------
  //
  //
  //
  const handleClearbutton = () => {
    setTitle("");
    setNote("");
    setIsPinned(false);
    setBgColor("");
    setCheckboxTags([]);

    //
    const titleBox = document.getElementById("card-notes");

    titleBox.style.height = "auto"; // Reset height to auto to allow shrinking
    // titleBox.style.height = `${titleBox.scrollHeight}px`; // Set height based on scrollHeight
  };

  const handleAddTagButton = (event) => {
    setToggleTaglist((prevState) => !prevState);
  };

  const handleNewTagEnter = (event) => {
    if (event.key === "Enter" && newtag.trim() !== "") {
      event.preventDefault(); // Prevent form submission on "Enter"
      if (!uniqueTags.includes(newtag.trim())) {
        setUniqueTags((prevTags) => [...prevTags, newtag.trim()].sort());
        setNewtag("");
      }
    }
  };

  const handleNewTagChange = (event) => {
    setNewtag(event.target.value);
  };

  const handleCheckboxClicks = (event) => {
    const tag = event.target.value;

    if (event.target.checked) {
      setCheckboxTags((prevTags) => [...prevTags, tag]);
    } else {
      setCheckboxTags((prevTags) => prevTags.filter((t) => t !== tag));
    }
  };

  const handleColorboxClicked = (event, color) => {
    event.preventDefault(); // Prevent form submission on "Enter"
    setBgColor(color);
  };

  const adjustHeight = (event) => {
    const el = event.target; // Get the textarea element from the event
    el.style.height = "auto"; // Reset height to auto to allow shrinking
    el.style.height = `${el.scrollHeight}px`; // Set height based on scrollHeight
  };

  return (
    <div className="takenote" style={{ backgroundColor: bgColor }}>
      <form action="#" onSubmit={handleSubmit} method="post">
        <input
          type="text"
          name="card-title"
          id="card-title"
          placeholder="Title"
          onChange={handleTitleChange}
          style={{ backgroundColor: bgColor }}
          value={title}
        />
        <textarea
          onKeyUp={adjustHeight}
          style={{
            resize: "none",
            overflow: "hidden",
            backgroundColor: bgColor,
          }} // Disable manual resizing
          name="card-notes"
          id="card-notes"
          placeholder="Take a Note"
          onChange={handleNoteChange}
          value={note}
        />
        <input
          className="button green"
          type="submit"
          value="Save"
          style={{ backgroundColor: bgColor }}
        />
        <input
          className="button blue"
          type="button"
          value="Clear"
          onClick={handleClearbutton}
          style={{ backgroundColor: bgColor }}
        />
        {/* <input className="button red" type="button" value="Close" /> */}
        <div className="color-container">
          {colors.map((color, index) => (
            <button
              key={index}
              className="colorBox"
              onClick={(e) => handleColorboxClicked(e, color)}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
        <hr />
        <label>Tags : </label>
        <button type="button" onClick={handleAddTagButton}>
          <i className="fa-solid fa-circle-plus add-icon "></i>
        </button>

        <div className="tags">
          {checkboxTags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {toggleTaglist && (
          <div className="addtags-container" ref={tagContainerRef}>
            <input
              type="text"
              name="newtag"
              id="newtag"
              value={newtag}
              onChange={handleNewTagChange}
              onKeyDown={handleNewTagEnter}
              placeholder="add new tag..."
            />

            <div className="existing-tags">
              {uniqueTags.map((tag, index) => (
                <label htmlFor={`${tag}`} key={index} className="tag-label">
                  <input
                    type="checkbox"
                    name={`${tag}`}
                    id={`${tag}`}
                    value={`${tag}`}
                    className="tag-checkbox"
                    checked={checkboxTags.includes(tag)}
                    onChange={handleCheckboxClicks}
                  />
                  {`${tag}`}
                </label>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default TakeNote;
