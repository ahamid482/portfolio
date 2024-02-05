const nodemailer = require("nodemailer");
const Transport = require("nodemailer-brevo-transport");

// Transporter
const transporter = nodemailer.createTransport(
  new Transport({ apiKey: process.env.BREVO_API })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please provide the required details!",
      });
    }

    // Email Matter
    transporter.sendMail({
      to: "abdulh2001ansari@gmail.com",
      from: "abdulhamid095@gmail.com",
      subject: "Regarding your profile",
      html: `
      <h4>Detail Information</h4>
      <ul>
      <li><p>Name: ${name}</p></li>
      <li><p>Email: ${email}</p></li>
      <li><p>Message: ${msg}</p></li>
      </ul>`,
    });
    return res.status(200).send({
      success: true,
      message: "Your message sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
