/* 7. Escribir una API con dos colecciones: usuarios y comentarios. La API debe tener rutas para crear, consultar,
modificar y borrar ambos recursos. Separar el código en rutas, controladores y modelos, cada uno en su archivo
separado. */

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'


const PORT = process.env.PORT = 3000;
const DB   = process.env.DB = 'mongodb://127.0.0.1/api';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//SE CONECTA
mongoose.connect(DB)
  .then(() => console.log('DB connected'));

//ESQUEMAS DE LOS USUARIOS Y COMENTARIOS
const UserSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String
})
const CommentSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  content: String
})

//EXPORTO LOS MODELOS DE LOS ESQUEMAS
const User = mongoose.model('User', UserSchema);
const Comment = mongoose.model('Comment', CommentSchema);

//METODOS GET
app.get('/api/comments', (req, res) => {
  Comment.find()
    .then(comments => res.status(200).json(comments)); 
})

app.get('/api/users', (req, res) => {
  User.find()
    .then(users => res.status(200).json(users)); 
})

app.get('/api/users/:id', (req, res) => {
  User.findOne({ id: req.params.id })
    .then(user => res.status(200).json(user)); 
})

app.get('/api/comments/:id', (req, res) => {
  Comment.findOne({ id: req.params.id })
    .then(comment => res.status(200).json(comment)); 
})

//METODOS POST

app.post('/api/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(() => res.status(200).json({ msg: 'User created' }));
})

app.post('/api/comments', (req, res) => {
  const newComment = new Comment(req.body);
  newComment.save()
    .then(() => res.status(200).json({ msg: 'Comment created' }));
})


//METODOS DELETE

app.delete('/api/users/:id', (req, res) => {
  User.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ msg: 'User deleted!' }));
});

app.delete('api/comments/:id', (req, res) => {
  Comment.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ msg: "Comment deleted" }));
})

//METODOS PUT
app.put('api/comments/:id', (req, res) => {
  Comment.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
    .then(comment => res.status(200).json(comment));
})


//MIDDLEWAR DE ERRORES Y DE CONECCION A LA DB
app.use((req, res) => {
  res.status(404).json({ msg: 'Not found'});
})

app.listen(PORT, () => {
  console.log('Server working');
  
})