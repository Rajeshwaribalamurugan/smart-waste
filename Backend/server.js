const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// Import Routes
const userRoutes = require("./routes/userRoutes");
const wasteRoutes = require("./routes/wasteRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/waste", wasteRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
