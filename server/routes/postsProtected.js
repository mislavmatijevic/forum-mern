const { Router } = require('express');
const { createPost, updatePost, deletePost } = require('../controllers/Posts');

const router = Router();

router.route('/').post(createPost);
router.route('/:id').patch(updatePost).delete(deletePost);

module.exports = router;
