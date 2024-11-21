const express = require("express");
const router = express.Router();
const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require("../services/controllers/controller");

// Route to create a new ticket
router.post("/", createTicket);

// Route to get all tickets with optional filters
router.get("/", getTickets);

// Route to get a ticket by its ID
router.get("/:id", getTicketById);

// Route to update a ticket by its ID
router.put("/:id", updateTicket);

// Route to delete a ticket by its ID
router.delete("/:id", deleteTicket);

module.exports = router;
