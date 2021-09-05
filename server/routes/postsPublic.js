const { Router } = require('express');
const { getAllPosts, getOnePost } = require('../controllers/Posts');

const router = Router();

router.route('/').get(getAllPosts);
router.route('/:id').get(getOnePost);

module.exports = router;
