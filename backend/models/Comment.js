import mongoose from 'mongo'

//ESQUEMAS DE LOS USUARIOS Y COMENTARIOS

const CommentSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  content: String
})