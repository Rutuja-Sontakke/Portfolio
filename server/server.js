const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ======================
// MIDDLEWARE
// ======================

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// ======================
// TEST ROUTES
// ======================

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running Successfully 🚀");
});

app.get("/contact", (req, res) => {
  res.send("Contact API Working ✅");
});

// ======================
// CONTACT ROUTE
// ======================

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Portfolio Message from ${name}`,

      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Portfolio Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <div style="background:#f5f5f5;padding:15px;border-radius:10px;">
            ${message}
          </div>
        </div>
      `,
    });

    // Success Response
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {

  console.log("CONTACT ERROR:", error);

  return res.status(500).json({
    success: false,
    message: error.message,
  });

}
});

// ======================
// PORT
// ======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});