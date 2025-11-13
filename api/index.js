import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express();

// Middleware to parse JSON (important for POST requests)
app.use(express.json());

// Mount user routes
app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
