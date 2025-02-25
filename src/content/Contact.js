import React from "react";
import "./Contact.css";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Contact;
