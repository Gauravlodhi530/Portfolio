"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db/db"));
const contact_1 = __importDefault(require("./routes/contact"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// CORS configuration
app.use((0, cors_1.default)({
    origin: ["https://gauravkumarportfolio.vercel.app", "http://localhost:3000"],
    credentials: true
}));
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
// Connect to database
(0, db_1.default)();
// Routes
app.use("/", contact_1.default);
app.get('/', (req, res) => {
    res.send('Backend is working!');
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
