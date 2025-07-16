import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import { router as menuItemsRouter } from './routes/menuItems.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// MongoDB Connection
mongoose.connect("mongodb+srv://gautham06:gautham98700%40@gautham.qp6apbf.mongodb.net/?retryWrites=true&w=majority&appName=gautham")
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/menu-items', menuItemsRouter);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Gautham Cafe API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 