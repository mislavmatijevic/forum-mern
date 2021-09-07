import styled from 'styled-components';
import chattingImage from '../assets/people-chatting.jpg';
import { DefaultText } from '../styles/generalStyles';
import { breakpoints } from '../styles/theme';

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.3)
    ),
    url(${chattingImage});
  width: 100%;
  min-height: fit-content;
  height: 400px;
  padding: 10vh 5px 0 1vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (${breakpoints.tablet}) {
    height: 500px;
  }
  @media screen and (${breakpoints.desktop}) {
    height: 60vh;
  }
`;

export const HeroText = styled.span`
  ${DefaultText};
  color: white;
  font-size: x-large;
  margin: 20px 40px;

  @media screen and (${breakpoints.desktop}) {
    margin-top: 5px;
    &:first-child {
      margin-top: 80px;
    }
  }
`;
