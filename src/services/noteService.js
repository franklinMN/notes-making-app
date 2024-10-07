import axiosInstance from "../axiosInstance";

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get("/api/notes");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

// Function to submit a new note to the backend
export const submitNote = async (noteData) => {
  try {
    const response = await axiosInstance.post("/api/notes", noteData);
    return response.data; // Return the created note
  } catch (error) {
    console.error("Error submitting note:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
