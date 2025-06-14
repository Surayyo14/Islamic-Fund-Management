import { request } from "./request";

// Profilni olish
export const getProfile = async () => {
  const res = await request.get("/users/me");
  return res.data;
};

// Profilni yangilash
export const updateProfile = async ({ id, formData }) => {
    const response = await axios.put(
      `https://api.al-muamalat.uz/api/users/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  };
  
export const getCourse = async () => {
  const res = await request.get("/courses/main");
  return res.data
};