import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoute.js'
import listingRouter from './routes/listingRoute.js'
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
const port = process.env.PORT || 3000

const __dirname = path.resolve();

const app = express();
app.use(express.json());

app.use(cookieParser());

// Connect to MongoDB database using Mongoose
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(port, () => {
    console.log('Server is running on port: 3000');
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});