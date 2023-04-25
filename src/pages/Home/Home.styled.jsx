import { StyledBtn } from '../../components/Button/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 30vh 30vw;
`;

export const TextThumb = styled.div`
  position: relative;
  z-index: 2;
`;

export const TweetLink = styled(StyledBtn)`
  display: inline-block;
  width: 200px;
`;
