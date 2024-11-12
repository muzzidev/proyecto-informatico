import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import userRouter from './routes/userRouter.js';
import commentRouter from './routes/commentRouter.js';

const PORT = 3000;
const DB   = 'mongodb://localhost/';

const app = express();

app.use(morgan('dev'));  
app.use(express.json()); 

mongoose.connect(DB)
  .then(() => console.log('DB conectada'));

app.use('/users', userRouter);
app.use('/comments', commentRouter);

app.use((req, res) => {
  res.status(404).json({ msg: 'No encontrado' }); // responde 404 Not found
});

app.listen(PORT, () => {
  console.log('Server andando');
});