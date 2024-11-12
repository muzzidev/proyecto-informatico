import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  content: String
})

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;