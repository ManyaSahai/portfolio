
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <TextField
      label="Your Message"
      value={message}
      onChange={handleChange}
      multiline
      rows={4}
      variant="outlined"
      fullWidth
    />
  );
};

export default MessageInput;
