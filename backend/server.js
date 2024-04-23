const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure multer to handle multipart/form-data
const upload = multer();
app.use(upload.array());

app.post('/send-email', (req, res) => {
  console.log('Received data:', req.body);

  const { name, email, phone, message } = req.body;

  // Set up your email transport using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'moueen415kiblawi@gmail.com',
      pass: 'ojhd ilbt evfe eslf',
    },
  });

  // Set up email options
  const mailOptions = {
    from: email,
    to: 'moueen455kiblawi@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
