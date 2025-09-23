import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceTimeline from "./ExperienceTimeline";
import "./Experience.css";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          My journey through various professional roles and experiences
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <ExperienceTimeline />
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;