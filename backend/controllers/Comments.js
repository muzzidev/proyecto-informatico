import Comment from '../models/Comment.js'

const getAllComments = (req, res) => {
  Comment.find()
    .then(Comments => res.status(200).json(Comments)); // responde 200 OK
};

const getComment = (req, res) => {
  Comment.findOne()
    .then(Comment => res.status(200).json(Comment));
}

const deleteComment = (req, res) => {
  Comment.deleteOne({ id: req.params.id })
  .then(() => res.status(200).json({ msg: 'Comment deleted!' }));
}

const createComment = (req, res) => {
  const newComment = new Comment(req.body);
  newComment.save()
    .then(() => res.status(200).json({ msg: 'Comment created' }));
}

const controller = { 
  getAllComments,
  getComment,
  deleteComment,
  createComment
}

export default controller;