import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = {
      user_name: formData.user_name.trim() === "",
      user_email: formData.user_email.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          "service_7zujy3f", // Replace with your Service ID
          "template_3f95c9u", // Replace with your Template ID
          form.current,
          "z0HKQLy45kVBchak3" // Replace with your Public Key
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          setSuccessMessage("Failed to send message, please try again later.");
        });
    }
  };

  return (
    <div id="contact">
      <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
        <form ref={form} className="formContainer" onSubmit={sendEmail}>
          <h2>Send me a message. Let's have a chat!</h2>

          <div className="formElement">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Your name.."
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            {errors.user_name && (
              <span className="error">Name is required</span>
            )}
          </div>

          <div className="formElement">
            <label htmlFor="user_email">E-mail</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Your email.."
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            {errors.user_email && (
              <span className="error">Email is required</span>
            )}
          </div>

          <div className="formElement">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={8}
              cols={30}
              placeholder="Your message.."
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <span className="error">Message is required</span>
            )}
          </div>

          <button type="submit" className="formButton">
            Submit
          </button>

          {successMessage && <p className="successMessage">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
