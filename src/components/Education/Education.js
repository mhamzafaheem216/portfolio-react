import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import EducationCards from "./EducationCards";
import "./Education.css";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
        <p style={{ color: "white" }}>
          Academic qualifications and learning experiences that have shaped my skills
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <EducationCards />
        </Row>
      </Container>
    </Container>
  );
}

export default Education;