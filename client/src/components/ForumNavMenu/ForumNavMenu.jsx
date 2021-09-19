import React, { useEffect, useState } from 'react';
import ForumCard from '../ForumCard/ForumCard';
import { NavWrapper } from './ForumNavMenuStyles';
import Loader from 'react-loader-spinner';

import { getAllPosts } from '../../api/post';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ForumNavMenu = ({ setSelectedPostID }) => {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        setFetchedPosts(await getAllPosts());
      } catch (error) {
        setFetchedPosts([]);
        console.log(error);
        setErrorMessage(`${error?.message || 'Something went wrong.'} Close this popup to refresh.`);
      }
    }
    !errorMessage && fetchPosts();
    return () => {
      setFetchedPosts([]);
    };
  }, [errorMessage]);

  const handleErrorMessageClose = () => {
    setErrorMessage('');
  };

  return (
    <NavWrapper>
      {errorMessage && (
        <ErrorMessage onErrorMessageClose={handleErrorMessageClose} errorMessage={errorMessage} />
      )}
      {fetchedPosts.length === 0 && !errorMessage ? (
        <Loader type='TailSpin' color='#00BFFF' height={100} width={100} />
      ) : (
        <>
          {fetchedPosts.posts?.map((value) => (
            <ForumCard key={value._id} title={value.name} onClick={() => setSelectedPostID(value._id)} />
          ))}
        </>
      )}
    </NavWrapper>
  );
};

export default ForumNavMenu;
