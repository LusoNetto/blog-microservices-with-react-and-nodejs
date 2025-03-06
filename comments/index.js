const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const {content} = req.body;
  console.log("Teste de entrada")

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({
    id: commentId,
    content,
  })

  commentsByPostId[req.params.id] = comments;
  
  res.status(201).send(comments)
});

app.listen(4001, () => {
  console.log('listening at port 4001');
})