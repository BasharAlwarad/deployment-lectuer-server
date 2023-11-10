import express from 'express';
import { connectToDatabase } from './config/db.js';
import dotenv from 'dotenv';
import usersRoute from './routes/users.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// @dec     Initial
app.get('/', (req, res) => {
  const data = 'Hello, World!';
  res.json({ data });
});

// @dec     testing
app.get('/healthz', (req, res) => {
  res.status(200).json({ data: 'Testing!' });
});

app.use('/data', usersRoute);

app.listen(8000, () => {
  console.log('Server is running on Port 8000');
});
