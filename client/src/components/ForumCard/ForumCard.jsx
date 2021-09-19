import React from 'react';
import { CardText, CardWrapper } from './ForumCardStyle';

const ForumCard = ({ title, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardText>{title}</CardText>
    </CardWrapper>
  );
};

export default ForumCard;
