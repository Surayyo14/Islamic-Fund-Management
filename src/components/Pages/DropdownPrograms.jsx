import { useQuery } from "@tanstack/react-query";
import React, { useState, useRef, useEffect } from "react";
import { getCourse } from "../services/profile";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Programs");
  const dropdownRef = useRef(null);

  const { data } = useQuery({
    queryKey: ["getCourse"],
    queryFn: getCourse,
  });

  // Dropdown tashqarisiga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div
        ref={dropdownRef}
        style={{ position: "relative", display: "inline-block" }}
      >
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          style={{
            backgroundColor: "transparent",
            color: "#686868",
            fontSize: "15px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // minWidth: "120px", // Button uchun minimal kenglik
          }}
        >
          <span>{selectedOption}</span>
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 1000,
              width: "250px", // Bu yerda width kichik harfda va o'lcham uzaytirildi
              maxHeight: "200px",
              overflowY: "auto",
              marginTop: "4px",
              animation: "slideDown 0.3s ease",
            }}
          >
            {data?.data?.map((option, index) => (
              <div
                key={index}
                onClick={() => selectOption(option)}
                style={{
                  padding: "12px 16px",
                  cursor: "pointer",
                  borderBottom:
                    index < data?.data?.length - 1 ? "1px solid #eee" : "none",
                  transition: "background-color 0.2s ease",
                  whiteSpace: "nowrap", // Matnni bir qatorda saqlash
                  overflow: "hidden",
                  textOverflow: "ellipsis", // Uzun matni "..." bilan tugalash
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                }}
              >
                {option?.name_uz}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default DropdownMenu;