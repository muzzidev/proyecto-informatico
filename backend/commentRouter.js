app.get('/api/comments', (req, res) => {
  Comment.find()
    .then(comments => res.status(200).json(comments)); 
})
app.get('/api/comments/:id', (req, res) => {
  Comment.findOne({ id: req.params.id })
    .then(comment => res.status(200).json(comment)); 
})

app.post('/api/comments', (req, res) => {
  const newComment = new Comment(req.body);
  newComment.save()
    .then(() => res.status(200).json({ msg: 'Comment created' }));
})
app.delete('api/comments/:id', (req, res) => {
  Comment.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ msg: "Comment deleted" }));
})

//METODOS PUT
app.put('api/comments/:id', (req, res) => {
  Comment.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
    .then(comment => res.status(200).json(comment));
})