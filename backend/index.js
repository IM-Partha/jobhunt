import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRouter from './routes/user.routes.js';
import comapnyRouter from './routes/company.route.js';

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

// routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/company', comapnyRouter);

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(` Server running on port ${PORT}`);
});
