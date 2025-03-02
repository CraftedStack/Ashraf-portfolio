import React from "react";
import "./Home.css"; // External CSS for additional styling
import devOpsImage from "../assets/image.png"; // Add an actual image in your assets folder
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
    <section className="home-container">
      {/* Left Section - Introduction */}
      <div className="home-content">
        <h1 className="home-title">
          Welcome to <span className="text-gradient">My Portfolio</span>
        </h1>
        <p className="home-description">
          Hi, I'm <span className="highlight">Ashraf Kazi</span>,  
          a passionate <span className="highlight">Cloud & DevOps Engineer Intern</span>.
          I specialize in <strong>automating infrastructure</strong>, 
          <strong> containerization</strong>, and <strong> cloud deployment</strong>.
        </p>
        <a href="/projects" className="explore-btn">
          Explore My Work
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="home-image">
        {<img src={devOpsImage} alt="Cloud & DevOps" />}
      </div>
    </section>
    </PageWrapper>
  );
};

export default Home;
