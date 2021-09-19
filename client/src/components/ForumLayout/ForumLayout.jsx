import React, { useState } from 'react';
import ForumNavMenu from '../ForumNavMenu/ForumNavMenu';
import ForumPostContent from '../ForumPostContent/ForumPostContent';
import { GridLayout } from './ForumLayoutStyle';

const ForumLayout = () => {
  const [selectedPostID, setSelectedPostID] = useState('');

  return (
    <GridLayout>
      <ForumNavMenu setSelectedPostID={setSelectedPostID} />
      <ForumPostContent selectedPostID={selectedPostID} />
    </GridLayout>
  );
};

export default ForumLayout;
