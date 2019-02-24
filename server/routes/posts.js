const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');

const router = express.Router();

// Get posts
router.get('/', (req, res) => {
  Post.find()
    .then(posts => res.send(posts))
    .catch(err => console.log(err));
});

// Create post
router.post('/', (req, res) => {
  new Post({
    title: req.body.title,
    body: req.body.body,
  })
    .save()
    .then(post => res.status(201).json({ success: 'Post created!' }))
    .catch(err => console.log(err));
});

// Delete post
router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        post.remove().then(post => res.json({ success: 'Post removed!' }));
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    })
    .catch(err => console.log(err));
});

// Update post
router.put('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        post.title = req.body.title;
        post.body = req.body.title;
        post
          .save()
          .then(post => res.status(201).json({ success: 'Post Updated' }))
          .catch(err => console.log(err));
      } else {
        res.status(404).send({ error: 'Post not found' });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
