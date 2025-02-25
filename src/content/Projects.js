import React from "react";
import "./Projects.css";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and hosted on AWS S3.",
  },
  {
    title: "Dockerized Web App",
    description: "A three-tier application using NGINX, PHP-FPM, and Node.js in Docker.",
  },
  {
    title: "Kubernetes Cluster",
    description: "Deployed a Kubernetes cluster on AWS EC2 for container orchestration.",
  },
];

const Projects = () => {
  return (
    <PageWrapper>
    <section className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
    </PageWrapper>
  );
};

export default Projects;
