import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import "./Projects.css";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import carWeb from "../../Assets/Projects/car.png";
import photoWeb from "../../Assets/Projects/photography.png";
import realState from "../../Assets/Projects/realestate.png";
import foodStop from "../../Assets/Projects/foodstop.png";
import football from "../../Assets/Projects/football.png";
import education from "../../Assets/Projects/education.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import travel from "../../Assets/Projects/travel.png";
import event from "../../Assets/Projects/event.png";
import fastFood from "../../Assets/Projects/fast food.png";
import shopping from "../../Assets/Projects/shopping.png";
import nbp from "../../Assets/Projects/nbp.png";
import pcs from "../../Assets/Projects/pcs.jpeg";
import psw from "../../Assets/Projects/psw.png";
import cdns from "../../Assets/Projects/cdns.png";
import cdc from "../../Assets/Projects/cdc.png";
import pso from "../../Assets/Projects/pso.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <span className="console-prompt">C:\Hamza&gt; cd </span>
          <strong className="purple">My Recent Works</strong>
          <span className="blinking-cursor">_</span>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Academic / Freelance Projects Section */}
        <h2 className="project-section-heading">
          <span className="star-icon">⭐</span>
          Academic / <strong className="purple">Freelance Projects</strong>
          <span className="star-icon">⭐</span>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A responsive and clean portfolio website showcasing creativity, professionalism, and a user-friendly design to highlight achievements."
              ghLink="https://github.com/mhamzafaheem216/portfolio"
              demoLink="https://storied-ganache-20631c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodStop}
              isBlog={false}
              title="FoodStop - Final Year Project"
              description="Foodstop is a university FYP featuring health and weather-based recommendations, along with map APIs, to enhance the user experience by providing tailored food suggestions."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoWeb}
              isBlog={false}
              title="PhotoGallery"
              description="A sleek photography portfolio with dynamic galleries, fullscreen viewer, and mobile-friendly design, showcasing my ability to create visually impactful websites for creatives."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={false}
              title="Football Club Legacy Website"
              description="A website dedicated to a football club, featuring player profiles, match schedules, and fan engagement tools."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={education}
              isBlog={false}
              title="Educational Institute Website"
              description="An education institute website with course listings, faculty profiles, admission details, and event updates, providing an intuitive and informative experience for students and staff."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastFood}
              isBlog={false}
              title="Fast Food Restaurant's Online Presence"
              description="A website for a fast food restaurant, featuring menu listings, online ordering, and location information."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carWeb}
              isBlog={false}
              title="Automotive Retail Industry"
              description="This platform provides a seamless automotive retail experience with product showcases, secure shopping, and responsive design, focusing on e-commerce and user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realState}
              isBlog={false}
              title="Real State Website"
              description="A real estate website with property listings, advanced search filters, and a user-friendly design, offering a seamless experience for buyers and sellers."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard Management System"
              description="A comprehensive dashboard management system for monitoring and analyzing key performance indicators."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Website Blogs/Booking"
              description="A travel website featuring blogs and booking functionalities, providing users with a comprehensive platform for travel planning and inspiration."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event Management Website"
              description="An event management website with features for event creation, registration, and attendee management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Online Shopping Store"
              description="An online shopping platform featuring a wide range of products, user-friendly navigation, and secure payment options."
            />
          </Col>
        </Row>

        {/* Professional Projects Section */}
        <h2 className="project-section-heading">
          <span className="star-icon">⭐</span>
          Professional <strong className="purple">Projects</strong>
          <span className="star-icon">⭐</span>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nbp}
              isBlog={false}
              title="Yakeen Project - National Bank of Pakistan"
              description="Engineered robust interface for NBP-KSA and NBP Hong Kong branches, integrated REST APIs with Temenos T24 core banking system for seamless data exchange."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psw}
              isBlog={false}
              title="PSW Project - Soneri Bank"
              description="Maintained Pakistan Single Window integration using Java Spring Boot, MS SQL, React, and Temenos T24, resolved critical issues and enhanced system functionality."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdns}
              isBlog={false}
              title="CDNS Project - National Savings Pakistan"
              description="Enhanced National Savings system using Java Spring Boot and React, developed SQL procedures for efficient data operations and added new features for improved user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nbp}
              isBlog={false}
              title="Roshan Digital Account (NBP) - DAO Portal"
              description="Developed new digital banking product using MERN Stack, worked as Backend Developer with frontend support, implementing complete system from scratch based on business requirements."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdc}
              isBlog={false}
              title="CDC - Central Depository Company, Pakistan"
              description="Developed securities settlement system using Java Spring Boot and MS SQL, implemented robust data processing workflows and enhanced system reliability for financial market operations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcs}
              isBlog={false}
              title="PCS - Port Community System"
              description="Maintained port logistics integration using Java Spring Boot and React, resolved critical system issues and enhanced communication workflows between port stakeholders and maritime operations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pso}
              isBlog={false}
              title="Open Wallet Project - Pakistan State Oil"
              description="Engineered core architecture using Java Spring Boot and MS SQL, designed REST APIs for seamless system integration and optimized database operations for transaction integrity."
            />
          </Col>

        </Row>
        <div className="projects-more">
        <div className="typewriter-fix">
          <Typewriter
            options={{
              strings: [
                "And many more... ✨",
                "With thousands of lines of code... 💻",
                "And a few bugs ;)",
                "And With those bugs... 🔥",
                "Even more fixes :( 🔧",
                "With countless hours of debugging... ⏳",
                "And coffee breaks ☕️",
                "With endless cups of coffee... ☕️🔥",
                "And a bit of chaos 😅",
                "And a developer's journey full of challenges and wins 🎉"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
            }}
          />
        </div>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
