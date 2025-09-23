import React from "react";
import { FaGraduationCap, FaBook, FaMapMarkerAlt } from "react-icons/fa";
import "./Education.css";
import universityLogo from "../../Assets/fast.png";
import interLogo from "../../Assets/delhi.jpg";
import schoolLogo from "../../Assets/city.png";

function EducationCards() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelors of Science in Computer Science",
      institution: "FAST - NUCES",
      location: "Karachi, Pakistan",
      date: "2020 - 2024",
      gpa: "3.5/4.0",
  description: "Comprehensive education in computer science, emphasizing problem-solving, software development, and modern technologies.",
      subjects: ["Software Engineering", "Artificial Intelligence", "Mobile Development", "Devops and Cloud Computing", "Data Science", "Recommender Systems"],
      logo: universityLogo,
      link: "https://www.nu.edu.pk/"
    },
    {
      id: 2,
      degree: "Intermediate : Pre-Engineering",
      institution: "Govt Dehli Science College",
      location: "Karachi, Pakistan",
      date: "2018 - 2020",
      percentage: "84%",
      grade: "A+",
  description: "Focused on building a strong foundation in engineering principles and analytical thinking.",
      subjects: ["Mathematics", "Physics", "Computer Science", "Chemistry", "English Literature"],
      logo: interLogo,
      link: "https://seccap.com.pk/government-dehli-college-admission/"
    },
    {
      id: 2,
      degree: "Matriculation : Computer Science",
      institution: "The City School",
      location: "Karachi, Pakistan",
      date: "2016 - 2018",
      percentage: "89%",
      grade: "A+",
  description: "Developed a strong academic base with an emphasis on critical thinking and problem-solving skills.",
      subjects: ["Mathematics", "Physics", "Computer Science", "Chemistry", "English Literature"],
      logo: schoolLogo,
      link: "https://thecityschool.edu.pk/"
    }
  ];

  return (
    <div className="education-card-container">
      {educationData.map((education) => (
        <div key={education.id} className="education-card">
          <div className="education-card-header">
            <div className="education-card-ribbon">
              {education.date.split(' - ')[1] || education.date}
            </div>
            <img 
              src={education.logo} 
              alt={education.institution} 
              className="education-logo"
            />
            <h2 className="education-degree">{education.degree}</h2>
            <h3 className="education-institution">{education.institution}</h3>
            <span className="education-date">{education.date}</span>
          </div>
          
          <div className="education-card-body">
            <div className="education-card-details">
              <h4><FaMapMarkerAlt /> Location</h4>
              <p>{education.location}</p>
              
              <h4><FaBook /> Focus</h4>
              <p>{education.description}</p>
            </div>
            
            <h4><FaGraduationCap /> Key Subjects</h4>
            <div className="education-card-subjects">
              {education.subjects.map((subject, index) => (
                <span key={index} className="education-subject">
                  {subject}
                </span>
              ))}
            </div>
          </div>
          
          <div className="education-card-footer">
            <div className="education-gpa">
              {education.gpa ? `GPA: ${education.gpa}` : ''}
              {education.percentage ? `Percentage: ${education.percentage}` : ''}
              {education.grade ? ` (${education.grade})` : ''}
            </div>
            <a href={education.link} target="_blank" rel="noopener noreferrer" className="education-link">
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationCards;