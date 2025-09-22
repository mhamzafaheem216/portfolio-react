import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Financial Technology",
          "Java Spring Boot",
          "MERN Stack",
          "Banking Systems",
          "Striving to Code My Way Through",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
