import axios from "axios";

const API_BASE = "https://localhost:3001/api";

// ✅ Add a new user
export const addUser = async (name: string, age: number) => {
  const res = await axios.post(`${API_BASE}/users/add-user`, { name, age });
  return res.data;
};

// ✅ Get paginated users
export const getUsers = async (page:number, limit:number) => {
  const res = await axios.get(`${API_BASE}/users/paginatedUsers`, {
    params: { page, limit },
  });
  return res.data;
};