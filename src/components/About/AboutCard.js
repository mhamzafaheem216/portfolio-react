import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Hamza Faheem </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am currently employed as a Software Developer at Paysys Labs.
            <br />
            I have completed Bachelors of Science (Bs) in Computer Science at FAST - NUCES, Karachi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cars and Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating random Websites
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to Code My Way Through!"{" "}
          </p>
          <footer className="blockquote-footer">Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
