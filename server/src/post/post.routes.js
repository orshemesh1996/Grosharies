const express = require('express');
const { status } = require('express/lib/response');
const PostController = require('./post.controllers');
const router = express.Router();

router.get('/', PostController.getPosts);

router.get('/:id', PostController.getPostById);

router.post('/', PostController.addPost);

router.delete('/:id', PostController.deletePost);

router.post('/:id', PostController.updatePost);

module.exports = router;
