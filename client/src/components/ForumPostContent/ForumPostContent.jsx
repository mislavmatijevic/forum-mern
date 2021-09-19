import React, { useCallback, useEffect, useState } from 'react';
import { getPost } from '../../api/post';
import Loader from 'react-loader-spinner';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { ContentWrapper, PostText, PostTitle, Separator } from './ForumPostContentStyle';

const ForumPostContent = ({ selectedPostID }) => {
  const [thisPost, setThisPost] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getThisPost = useCallback(async () => {
    try {
      setThisPost((await getPost(selectedPostID)).selectedPost);
    } catch (error) {
      setErrorMessage(`${error?.message || JSON.stringify(error)} Close this popup to retry.`);
    }
  }, [selectedPostID]);

  useEffect(() => {
    getThisPost();
    return () => {
      setThisPost(false);
    };
  }, [getThisPost]);

  const handleMessageClose = () => {
    setErrorMessage(false);
    getThisPost();
  };

  return (
    <>
      {errorMessage && <ErrorMessage onErrorMessageClose={handleMessageClose} errorMessage={errorMessage} />}
      <ContentWrapper>
        {!thisPost ? (
          <Loader type='MutatingDots' color='#00BFFF' height={100} width={100} />
        ) : (
          <>
            <PostTitle>{thisPost.name}</PostTitle>
            <PostText>{thisPost.text}</PostText>
            <Separator />
          </>
        )}
      </ContentWrapper>
    </>
  );
};

export default ForumPostContent;
