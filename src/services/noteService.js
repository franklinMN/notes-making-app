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
