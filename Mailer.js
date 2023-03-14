import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password',
  },
});

const sendEmail = () => {
  const mailOptions = {
    from: 'your_email_address',
    to: 'recipient_email_address',
    subject: 'Test Email',
    text: 'This is a test email sent from my React Native app!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
