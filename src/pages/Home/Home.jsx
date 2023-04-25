import { Link } from 'react-router-dom';
import { Title } from 'components/Title/Title';
import { Container, TextThumb, TweetLink } from './Home.styled';

const Home = () => {
  return (
    <>
      <Container>
        <TextThumb>
          <Title />
          <TweetLink as={Link} to="/tweets">
            Tweets!
          </TweetLink>
        </TextThumb>
      </Container>
    </>
  );
};

export default Home;
