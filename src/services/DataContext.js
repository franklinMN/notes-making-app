import React, { Children } from "react";
import { createContext, useState, useEffect } from "react";
import { fetchData } from "../services/noteService";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const notesData = await fetchData();
        // sorting the fetched data
        const sortedNotes = [...notesData].sort(
          (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate)
        );
        setData(sortedNotes);
      } catch (error) {
        console.error("Error loading notes:", error);
      }
    };

    loadData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
