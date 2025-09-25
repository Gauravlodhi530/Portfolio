"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const Contact_1 = __importDefault(require("../models/Contact"));
const router = (0, express_1.Router)();
router.post("/api/contact", async (req, res) => {
    console.log("Incoming POST /api/contact");
    console.log("Request body:", req.body);
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        // Check if database is connected
        if (mongoose_1.default.connection.readyState !== 1) {
            console.error("Database not connected");
            return res.status(500).json({ message: "Database connection error" });
        }
        const contact = new Contact_1.default({ name, email, phone, message });
        await contact.save();
        console.log("Message saved successfully");
        res.status(200).json({ message: "Message saved successfully" });
    }
    catch (error) {
        console.error("Error saving contact:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
// GET route to fetch all contacts
router.get("/api/contacts", async (req, res) => {
    try {
        const contacts = await Contact_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    }
    catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ message: "Failed to fetch contacts" });
    }
});
// DELETE route to delete a contact
router.delete("/api/contacts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact_1.default.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({ message: "Failed to delete contact" });
    }
});
exports.default = router;
