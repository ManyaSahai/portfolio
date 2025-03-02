import React from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";

const SERVICE_ID = "service_7zujy3f"; // Replace with actual Service
const TEMPLATE_ID = "template_3f95c9u"; // Replace with actual Template ID
const PUBLIC_KEY = "z0HKQLy45kVBchak3"; // Replace with actual Public Key

const Contact: React.FC = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY).then(
      (result: { text: string }) => {
        console.log("SUCCESS:", result.text);
        alert("Message Sent Successfully");
      },
      (error: { text: string }) => {
        console.log("ERROR:", error.text);
        alert("Something went wrong!");
      }
    );

    e.currentTarget.reset();
  };

  return (
    <div id="contact">
      <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
        <form className="formContainer" onSubmit={handleOnSubmit}>
          <h2>Send me a message. Let's have a chat!</h2>

          <div className="formElement">
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Your name.."
              required
            />
          </div>

          <div className="formElement">
            <label htmlFor="from_email">E-mail</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Your email.."
              required
            />
          </div>

          <div className="formElement">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={8}
              cols={30}
              placeholder="Your message.."
              required
            />
          </div>

          <button type="submit" className="formButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
