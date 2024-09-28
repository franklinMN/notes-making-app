// import React, { useState } from "react";
import "./TakeNote.css";

const TakeNote = () => {
  //   const [title, setTitle] = useState("");
  //   const [note, setNote] = useState("");

  return (
    <div className="takenote" method="post">
      <form action="#">
        <input
          type="text"
          name="card-title"
          id="card-title"
          placeholder="Title"
        />
        <textarea name="card-notes" id="card-notes" placeholder="Take a Note" />
        <input className="button green" type="submit" value="Save" />
        <input className="button blue" type="button" value="Clear" />
        <input className="button red" type="button" value="Close" />
        <hr />
        <label>Tags : </label>
        <a href="#">
          <i className="fa-solid fa-circle-plus"></i>
        </a>
        <div className="tags">
          <span className="tag">buy</span>
          <span className="tag">sell</span>
          <span className="tag">buy</span>
          <span className="tag">sell</span>
          <span className="tag">buy</span>
          <span className="tag">sell</span>
          <span className="tag">buy</span>
          <span className="tag">sell</span>
        </div>
      </form>
    </div>
  );
};

export default TakeNote;