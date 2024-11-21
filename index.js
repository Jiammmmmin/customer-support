require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db"); // MongoDB connection
const { connectRedis } = require("./config/redis"); // Redis connection

const app = express();

// Connect to MongoDB
connectDB();

// Connect to Redis
connectRedis();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const ticketRoutes = require("./services/ticket-management/routes");
app.use("/api/tickets", ticketRoutes);
