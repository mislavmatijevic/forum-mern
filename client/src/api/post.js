import { contactAPI } from './api';

export const getPost = async (id) => {
  return contactAPI(`posts/${id}`);
};

export const getAllPosts = async () => {
  return contactAPI('posts');
};
