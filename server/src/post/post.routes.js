const express = require('express');
const { status } = require('express/lib/response');
const PostController = require('./post.controllers');
const router = express.Router();

router.get('/', PostController.getPosts);

router.get('/:id', PostController.getPostById);

router.get('/user=:id', PostController.getPostsByUser);

router.get('/category=:id', PostController.getPostsByCategory);

router.get('/tag=:id', PostController.getPostsByTag);

router.post('/', PostController.addPost);

router.delete('/:id', PostController.deletePost);

router.post('/:id', PostController.updatePost);

module.exports = router;