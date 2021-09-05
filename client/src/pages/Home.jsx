import React from 'react';
import { HeroSection, HeroText } from './HomeStyles';

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroText>Welcome to the forums!</HeroText>
        <HeroText>Here you'll be able to meet a lot of different, cool people!</HeroText>
        <HeroText>You can post your thoughts or start real-time chat with someone!</HeroText>
      </HeroSection>
    </>
  );
};

export default Home;
