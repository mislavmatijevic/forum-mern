import styled from 'styled-components';
import chattingImage from '../assets/people-chatting.jpg';
import { DefaultText } from '../styles/generalStyles';
import { breakpoints } from '../styles/theme';

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${chattingImage});
  width: 100%;
  height: fit-content;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (${breakpoints.tablet}) {
    height: 400px;
    padding: 10vh 5px 0 1vh;
  }
`;

export const HeroText = styled.span`
  ${DefaultText};
  color: white;
  font-size: x-large;
  margin: 20px 40px;
`;
