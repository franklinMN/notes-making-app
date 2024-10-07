import React from "react";
import { createContext, useState, useEffect } from "react";
import { fetchData } from "../services/noteService";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null); // State for selected tag
  const [uniqueTags, setUniqueTags] = useState([]);

  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const loadData = async () => {
      try {
        // get data
        const notesData = await fetchData();
        // sort data
        const sortedNotes = [...notesData].sort(
          (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate)
        );
        // set data
        setData(sortedNotes);

        //get and set tags
        setUniqueTags(
          Array.from(new Set(notesData.flatMap((note) => note.tags))).sort()
        );

        // Clear any previous error
        setError(null);
      } catch (error) {
        // If there is an error, set the error message
        setError("Unable to retrieve data. The server might be down.");
        console.error("Error loading notes:", error);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        selectedTag,
        setSelectedTag,
        uniqueTags,
        setUniqueTags,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
