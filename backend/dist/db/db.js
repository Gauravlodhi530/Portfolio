"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGOOSE_URL;
        if (!mongoUrl) {
            console.error("MONGOOSE_URL environment variable is not set");
            return;
        }
        await mongoose_1.default.connect(mongoUrl);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error("MongoDB connection failed:", err);
        // Don't exit process in production
        if (process.env.NODE_ENV === 'development') {
            process.exit(1);
        }
    }
};
exports.default = connectDB;
