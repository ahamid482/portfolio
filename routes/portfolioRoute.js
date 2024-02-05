const express = require("express");
const { sendEmailController } = require("../controllers/portfolioController");

// Router Object
const router = express.Router();

// Routes
router.post("/sendEmail", sendEmailController);

// Export
module.exports = router;
