const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function (req, res) {
  // Allow only POST
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const result = await resend.emails.send({
      from: `Portfolio Contact <${process.env.REPLY_FROM || 'no-reply@example.com'}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Contact form: ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p><p>${message}</p>`
    });

    return res.status(200).json({ success: true, result });
  } catch (err) {
    console.error('contact api error:', err && err.message ? err.message : err);
    // Always return valid JSON so frontend .json() doesn't crash
    return res.status(500).json({ success: false, message: err?.message || 'Server error' });
  }
};