import React from "react";
import "./Skills.css";
import PageWrapper from "../components/PageWrapper";

const skills = [
  {
    title: "Cloud Providers",
    description: "Proficient in various AWS services like EC2, VPC, RDS, S3, CDN, Amplify, Route 53, IAM, and more. Also familiar with GCP services, including VM, Cloud SQL, Buckets, and Security Firewalls.",
  },
  {
    title: "Containerization",
    description: "Experienced with Docker CLI, Dockerfile, and Docker Compose. Basic knowledge of Kubernetes, continuously improving expertise.",
  },
  {
    title: "Configuration Management",
    description: "Hands-on experience with Ansible, including playbooks, inventory management, and integrating it with Terraform and Jenkins.",
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Strong understanding of Terraform for automated infrastructure provisioning with minimal effort.",
  },
  {
    title: "Version Control",
    description: "Proficient in Git, GitHub, GitHub Actions, and Webhooks. Skilled in troubleshooting Git-related issues.",
  },
  {
    title: "Operating Systems",
    description: "Hands-on experience with Ubuntu Linux distributions. Regular use of Windows, with ongoing exploration of other Linux distributions.",
  },
  {
    title: "CI/CD Pipelines",
    description: "Well-versed in Jenkins, with hands-on experience in creating freestyle projects and parameterized pipelines.",
  },
  {
    title: "Programming",
    description: "Understanding of Python syntax and actively learning the Boto3 library for Cloud and DevOps automation.",
  },
  {
    title: "Web/Application Servers",
    description: "Good understanding of NGINX and Apache configuration management, with practical experience in NGINX.",
  },
  {
    title: "Monitoring and Visualization",
    description: "Basic hands-on experience with Prometheus and Grafana, with a solid understanding of their functionalities.",
  },
  {
    title: "Databases",
    description: "Hands-on experience with MySQL and a strong understanding of PostgreSQL and Oracle RDS.",
  },
  {
    title: "Soft Skills",
    description: "Excellent communication, leadership qualities, teamwork, adaptability, and strong problem-solving skills.",
  },
  {
    title: "Extra Skills",
    description: "Proficient in React.js for building frontend pages. Quick learner, passionate about new technologies, and enjoys reading.",
  }  
];

const Skills = () => {
  return (
    <PageWrapper>
      <section className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h2 className="skill-title">{skill.title}</h2>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
