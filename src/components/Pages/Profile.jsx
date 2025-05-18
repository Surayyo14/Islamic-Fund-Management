import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfile, updateProfile } from "../services/profile";

const Profile = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Profile ma'lumotlarini olish
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  // Formani serverga yuborish
  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      alert("Ma'lumotlar saqlandi!");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      reset();
    },
    onError: () => {
      alert("Xatolik yuz berdi!");
    },
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        full_name: data.data.full_name,
        address: data.data.address,
        phone_number: data.data.phone_number,
      });
    }
  }, [data, reset]);

 
  const onSubmit = (formDataValues) => {
    const formData = new FormData();
    formData.append("full_name", formDataValues.full_name);
    formData.append("address", formDataValues.address);
    formData.append("phone_number", formDataValues.phone_number);
    if (formDataValues.images && formDataValues.images[0]) {
      formData.append("images", formDataValues.images[0]);
    }

    const userId = data?.data?.user_id; // <-- SHU TO'G'RI!
    mutation.mutate({ id: userId, formData });
  };

  if (isLoading)
    return <p className="text-center mt-10 text-blue-500">Yuklanmoqda...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Xatolik: {error.message}</p>
    );

  return (
    <>
      <Header />

      <div className="contact-container">
        <div className="contact-nav">
          <Link to="/profile">
            <button className="contact-button">Profile</button>
          </Link>
          <Link to="/cource">
            <button className="contact-button">Courses</button>
          </Link>
        </div>

        <div className="contact-card">
          <div className="contact-header">
            <div className="contact-user">
              <img
                src={`https://api.al-muamalat.uz/uploads/images/${data?.data?.image_src}`}
                alt="User"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h1 className="contact-user-name">{data?.data?.full_name}</h1>
                <p className="contact-user-name">{data?.data?.phone_number}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form">
              <div className="contact-form-group">
                <div>
                  <label className="contact-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="contact-input"
                    {...register("full_name", {
                      required: "Full name is required",
                    })}
                  />
                  {errors.full_name && (
                    <p className="text-red-500 text-sm">
                      {errors.full_name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="contact-label">Address</label>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="contact-input"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact-form-group">
                <div>
                  <label className="contact-label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="contact-input"
                    {...register("phone_number", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="contact-label">Image</label>
                  <input
                    type="file"
                    className="contact-input"
                    {...register("images")}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="save-button"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
