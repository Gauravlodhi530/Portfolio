import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db";
import contactRoutes from "./routes/contact";

dotenv.config();
const app = express();

// CORS configuration
app.use(cors({
  origin: ["https://gauravkumarportfolio.vercel.app", "http://localhost:3000"],
  credentials: true
}));

app.use(express.json());
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Routes
app.use("/",contactRoutes);

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
