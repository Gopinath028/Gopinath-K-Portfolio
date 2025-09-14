const nodemailer = require('nodemailer');

const port = Number(process.env.SMTP_PORT) || 587;
const secure = port === 465; // true for 465, false for other ports

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// optional: verify once on startup
transporter.verify().then(() => console.log('Mail server is ready')).catch(err => console.warn('Mail server verify failed:', err));

exports.sendContactEmail = async (contact) => {
  const html = `
    <h3>New contact message</h3>
    <p><strong>Name:</strong> ${contact.name}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
    <p><strong>Phone:</strong> ${contact.phone || 'N/A'}</p>
    <p><strong>Subject:</strong> ${contact.subject || 'N/A'}</p>
    <p><strong>Message:</strong><br/>${(contact.message || '').replace(/\n/g, '<br/>')}</p>
    <hr/>
    <small>Saved to DB: ${contact._id}</small>
  `;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_TO || process.env.SMTP_USER,
    subject: `New contact: ${contact.subject || 'No subject'}`,
    text: `New message from ${contact.name} (${contact.email})\n\n${contact.message}`,
    html
  };

  return transporter.sendMail(mailOptions);
};
