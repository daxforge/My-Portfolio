import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
}, { timestamps: true });
const Message = mongoose.model('Message', messageSchema);

app.get('/api/health', (_, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'Please complete every field.' });
  if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: 'Please provide a valid email.' });

  try {
    if (mongoose.connection.readyState === 1) await Message.create({ name, email, message });
    else console.info('Contact submission (MongoDB not connected):', { name, email, message });
    return res.status(201).json({ message: 'Message received — I’ll get back to you soon.' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong. Please try again shortly.' });
  }
});

// Serve frontend build if present (for single-service fullstack deployment on Render/Heroku)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, '../../frontend/dist');

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

async function start() {
  if (process.env.MONGODB_URI) {
    try { await mongoose.connect(process.env.MONGODB_URI); console.log('MongoDB connected'); }
    catch (error) { console.warn('MongoDB unavailable; contact messages will be logged only.'); }
  }
  app.listen(port, () => console.log(`API running at http://localhost:${port}`));
}

start();
