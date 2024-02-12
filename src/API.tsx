import axios from "axios";
import { UserData } from "./Types";

export const fetchNotes = async () => {
  try {
    const response = await axios.get('http://localhost:3006/notes');
    return response.data;
  } catch (error) {
    throw new Error('Fetch request failed');
  }
}

  
export const deleteNotes = async (id: string) => {
  try {
    await axios.delete(`http://localhost:3006/notes/${id}`);
  } catch (error) {
    throw new Error('Delete request failed');
  }
};

export const addNotes = async (newUserData: UserData) => {
  try {
    const response = await axios.post('http://localhost:3006/notes', newUserData);
    return response.data;
  } catch (error) {
    throw new Error('Post request failed');
  }
}
      