import React, { useState } from "react";
import "./Contact.css";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  const [message, setMessage] = useState(null); // State for success/error message

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage(null); // Reset message state

    const formData = new FormData(event.target);
    formData.append("access_key", "<token>"); // Replace with actual token

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        event.target.reset(); // Clear the form
      } else {
        setMessage({ type: "error", text: "Failed to send message. Try again." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." });
    }
  };

  return (
    <PageWrapper>
      <div className="contact-container">
        <div className="contact-box">
          <h2 className="contact-title">Contact Me</h2>

          {/* Success/Error Message */}
          {message && (
            <div className={`message-box ${message.type}`}>
              {message.text}
            </div>
          )}

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
