import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const createContact = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    // Save to DB
    const newContact = new Contact({ fullName, email, phone, subject, message });
    await newContact.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_TO,
      subject: subject || "New Portfolio Message",
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    res.status(201).json({ message: "Message stored and email sent successfully!" });
  } catch (error) {
    console.error("❌ Error in createContact:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};
