import React from "react";
import "./Projects.css";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and hosted using AWS S3,CDN,ACM,route53 and to simplfy it later used Amplify which replaced S3,CDN and ACM steps.",
    link: "https://ashraf-portfolio.kitchenkraftequipments.in",
  },
  {
    title: "Kitchen Kraft Equipements",
    description: "A professional live webiste build with React and hosted using AWS S3,CDN,ACM,route53 and to simplfy it later used Amplify which replaced S3,CDN and ACM steps.",
    link: "https://kitchenkraftequipments.in/",
  },
  {
    title: "S3LinkManager",
    description: "Uploading a file from local device to S3 and storing S3 link in RDS through Web browser.",
    link: "https://github.com/AshZi03/S3LinkManager",
  },
  {
    title: "Automated Static Website Deployment",
    description: "A project to automate the deployment of a static website on a remote Ubuntu server using Ansible for infrastructure as code, setting up NGINX, and securely transferring web files.",
    link: "https://github.com/AshZi03/deploy-static-with-Ansible.git",
  },
  {
    title: "BlackMamba - UI Developer",
    description: "Led a team in developing a game-based web application to facilitate language learning platform.Contributed to the user interface development using HTML, CSS, JavaScript, and React,delivering a user-friendly experience..  .",
    link: "https://github.com/AshZi03/BlackMamba"
  },
  {
    title: "FoodSite - UI Developer",
    description: "Designed and developed a responsive UI for a food website using HTML, CSS, and Bootstrap..",
    link: "https://github.com/atharvajadhav123/foodsite"
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
            <a className="project-link" href={project.link} target="_blank">View</a>
          </div>
        ))}
      </div>
    </section>
    </PageWrapper>
  );
};

export default Projects;
