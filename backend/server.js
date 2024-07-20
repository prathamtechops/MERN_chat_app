import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { chats } from "./data/data.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running Successfully");
});

app.get("/api/chat", (req, res) => {
  res.json(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.json(singleChat);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
