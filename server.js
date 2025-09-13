import express from "express";
import { generate } from "./chatbot.js";
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";

const app = express();
const port = 3005;
app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.post("/chat", async(req, res) => {
  const { message, threadId } = req.body
  
  if (!message || !threadId) {
    res.status(400).json({ message: 'All fields are required' })
    return
  }
    
    

    const result = await generate(message, threadId)

    res.json({message : result})
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
