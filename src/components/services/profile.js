// // services/profile.js
// import { request } from "./request"; // Chunki request.jsx shu papkada joylashgan

// // Profilni olish
// export const getProfile = async () => {
//   const res = await request.get("/users/me");
//   return res.data;
// };

// // Profilni yangilash
// export const updateProfile = async (formData) => {
//   const res = await request.post("/users/me", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return res.data;
// };
// services/profile.js (yangi fayl yaratishingiz yoki services ichida)
// Bu faylda API so'rovlarini shu yerdan boshqaramiz

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
  
