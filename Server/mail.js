const { Resend } = require('resend');

// Load environment variables only in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail({ name, email, message }) {
  try {
    // Sanitize inputs to prevent injection attacks
    const sanitize = (str) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedMessage = sanitize(message);

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Replace with your verified email in production
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Message from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `
    });

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message || error);
    throw error;
  }
}

module.exports = sendMail;