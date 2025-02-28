import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState(() => ({
  user_name: '',
  user_email: '',
  message: '',
}));

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
    console.log(`Typing in ${name}:`, value); // LOG input updates

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value.trim() === '' }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = {
      user_name: formData.user_name.trim() === '',
      user_email: formData.user_email.trim() === '',
      message: formData.message.trim() === '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          'service_7zujy3f', // Replace with your Service ID
          'template_3f95c9u', // Replace with your Template ID
          form.current,
          'z0HKQLy45kVBchak3' // Replace with your Public Key
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
        })
        .catch((error) => {
          console.log('FAILED...', error);
          setSuccessMessage('Failed to send message, please try again later.');
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Have an idea in mind? Let’s bring it to life together!</p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
            <TextField
  required
  label="Your Name"
  name="user_name"
  value={formData.user_name}
  onChange={handleChange}
  error={errors.user_name}
  helperText={errors.user_name ? 'Please enter your name' : ''}
  fullWidth
   variant="filled"
  InputProps={{
    style: { color: 'red', backgroundColor: 'yellow' }, // This WILL force visibility
  }}
/>

              <TextField
                required
                label="Email"
                placeholder="How can I reach you?"
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleChange}
                error={errors.user_email}
                helperText={errors.user_email ? 'Please enter your email' : ''}
                fullWidth
                  variant="filled"
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              name="message"
              multiline
              rows={10}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message ? 'Please enter the message' : ''}
              fullWidth
                variant="filled"
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              sx={{ alignSelf: 'flex-end' }}
            >
              Send
            </Button>
          </Box>

          {successMessage && (
            <Typography variant="body1" color="success" sx={{ mt: 2 }}>
              {successMessage}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

