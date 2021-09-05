const CustomError = require('../errors/CustomError');
const Post = require('../models/post');

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json({ success: true, posts });
};

const createPost = async (req, res) => {
  const postData = req.body;

  postData.publisher = req.token.id;

  const { _id: postId } = await Post.create(req.body);
  res.json({ success: true, postId });
};

const getOnePost = async (req, res) => {
  const { id } = req.params;

  const selectedPost = await Post.findById(id);

  if (selectedPost) {
    return res.json({ success: true, selectedPost });
  } else {
    throw new CustomError(`No item with id ${id} found`, 404);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  await checkOwner(id, req.token.id);

  const { name, text } = req.body;

  if (!name && !text) {
    throw new Error('No name and/or text provided!');
  }

  const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
    new: true,
    returnDocument: true,
  });

  if (updatedPost) {
    return res.json({ success: true, updatedPost });
  } else {
    throw new CustomError(`No item with id ${id} found`, 404);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  await checkOwner(id, req.token.id);
  const deletedPost = await Post.findByIdAndDelete(id);

  if (deletedPost) {
    return res.json({ success: true, deletedPost });
  } else {
    throw new CustomError(`No item with id ${id} found`, 404);
  }
};

const checkOwner = async (postId, providedPublisherId) => {
  const result = await Post.findOne({ _id: postId, publisher: providedPublisherId });

  if (result === null) {
    throw new CustomError(`This post does not belong to bearer of the token!`, 403);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
};
