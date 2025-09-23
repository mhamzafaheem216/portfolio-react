import React from "react";
import "./Experience.css";
import paysysLogo from "../../Assets/paysys.png";
import systemsLogo from "../../Assets/systems.png";
import xfinitiveLogo from "../../Assets/xfinitive.png";
import fastnucesLogo from "../../Assets/fastnuces.png";

function ExperienceTimeline() {
  const experienceData = [
    {
      id: 1,
      title: "Associate Software Engineer",
      company: "Paysys Labs",
      date: "Nov 2024 – Present",
      description: "Worked on major projects for Pakistan State Oil, Pakistan Single Window (PSW), Soneri Bank, National Bank of Pakistan and National Savings Pakistan (CDNS), delivering scalable and efficient financial solutions. Played a critical role in improving data workflows and system performance through project-specific development and optimizations.",
      skills: ["Java", "Spring Boot", "Microservices", "SQL", "Swagger", "RabbitMQ", "Git", "Docker"],
      position: "right",
      logo: paysysLogo
    },
    {
      id: 2,
      title: "Java Developer",
      company: "Systems Limited",
      date: "June 2024 – Oct 2024",
      description: "Developed Java RESTful APIs for banking systems to ensure secure and efficient transactions. Worked with Temenos T24 to integrate core banking functionalities and enhance system capabilities. Managed API and database integrations, including generating reports and ensuring seamless data flow.",
      skills: ["Java", "REST APIs", "Temenos T24", "SQL", "Info Basic", "Postman"],
      position: "left",
      logo: systemsLogo
    },
    {
      id: 3,
      title: "Web Development - Intern",
      company: "Xfinitive Group",
      date: "Jun. 2023 – Aug. 2023",
      description: "Developed and maintained dynamic, responsive web applications using MERN Stack. Worked on Backend Development and consumed REST APIs. Collaborated and worked with the team on MongoDB Database and its integration with the Application.",
      skills: ["MERN Stack", "MongoDB", "REST APIs"],
      position: "right",
      logo: xfinitiveLogo
    },
    {
      id: 4,
      title: "Student Teaching Assistant",
      company: "National University Of Computer and Emerging Sciences - FAST",
      date: "Dec. 2023 – June 2024",
      description: "Supported educators in the Computer Science department by assisting with course materials and providing hands-on technical support.",
      skills: ["Teaching Assistance", "Technical Support", "Course Material Development"],
      position: "left",
      logo: fastnucesLogo
    }
  ];

  return (
    <div className="experience-timeline-container">
      {experienceData.map((experience) => (
        <div 
          key={experience.id} 
          className={`experience-timeline-item experience-${experience.position}`}
        >
          <div className="experience-circle"></div>
          <div className="experience-timeline-content">
            <div className="experience-header">
              <span className="experience-date">{experience.date}</span>
              {experience.logo && (
                <img 
                  src={experience.logo}
                  alt={`${experience.company} logo`} 
                  className="experience-logo" 
                />
              )}
            </div>
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.description}</p>
            <div className="experience-skills">
              {experience.skills.map((skill, index) => (
                <span key={index} className="experience-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
