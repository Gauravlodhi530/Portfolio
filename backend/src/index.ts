import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db";
import contactRoutes from "./routes/contact";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(contactRoutes);
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
