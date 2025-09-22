import React, { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleHover = (e) => {
      if (e.target.tagName === "BUTTON") {
        console.log("Hovering over button"); // Debugging log
        cursor.classList.add("hover");
      } else {
        cursor.classList.remove("hover");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return <div className="custom-cursor" id="custom-cursor"></div>;
};

export default CustomCursor;