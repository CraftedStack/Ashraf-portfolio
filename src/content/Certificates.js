import React from "react";
import "./Certificates.css";
import PageWrapper from "../components/PageWrapper";

const certificates = [
  {
    title: "Master in Cloud Architecture",
    description: "Completed a 5-month Cloud and DevOps training at Fortune Cloud.",
    link: "https://www.credly.com/aws-cloud-cert",
  },
  {
    title: "Amazon Bedrock: Getting Started",
    description: "Certificate of completion.",
    link: "https://www.credly.com/aws-cloud-cert",
  },
  {
    title: "Intercollegiate Code Debugger Competition",
    description: "Certificate of Participation. Reached the final round.",
    link: "https://www.docker.com/certification",
  },
  {
    title: "Intercollegiate Project Competition",
    description: "Certificate of Participation.",
    link: "https://www.cncf.io/certification/cka",
  },
];


const Certificates = () => {
  return (
    <PageWrapper>
      <section className="certificates-container">
        <h1 className="certificates-title">My Certificates</h1>
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <h2 className="certificate-title">
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  {certificate.title}
                </a>
              </h2>
              <p className="certificate-description">{certificate.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Certificates;
