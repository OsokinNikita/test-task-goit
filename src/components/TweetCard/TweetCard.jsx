import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { updateFollowers } from 'helpers/fetchAPI';
import {
  Container,
  ImgBorder,
  ImgThumb,
  ImgLabel,
  CardText,
} from './TweetCard.styled';
import * as userImgPlaceholder from '../../images/card/user-placeholder.jpg';

export const TweetCard = ({ userObj, setFollowedUsers, followed }) => {
  const [isActive, setIsActive] = useState(followed);
  const [currentUser, setCurrentUser] = useState(userObj);

  useEffect(() => {
    if (currentUser === userObj) {
      return;
    }

    updateFollowers(currentUser);
  }, [currentUser, userObj]);

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      setFollowedUsers(prev => [...prev, userObj]);
      setCurrentUser(prev => ({ ...prev, followers: prev.followers + 1 }));
    } else {
      setIsActive(false);
      setFollowedUsers(prev => {
        const newFollowedUsers = prev.filter(
          item => item.user !== userObj.user
        );
        return newFollowedUsers;
      });
      setCurrentUser(prev => ({ ...prev, followers: prev.followers - 1 }));
    }
  };

  return (
    <Container>
      <ImgBorder>
        <ImgLabel>{currentUser.user}</ImgLabel>
        <ImgThumb>
          <img
            src={currentUser.avatar ?? userImgPlaceholder.default}
            alt={currentUser.user}
          />
        </ImgThumb>
      </ImgBorder>
      <CardText>{currentUser.tweets.toLocaleString('en-IN')} Tweets</CardText>
      <CardText>
        {currentUser.followers.toLocaleString('en-IN')} Followers
      </CardText>
      <Button
        text={isActive ? 'Following' : 'Follow'}
        onClick={handleClick}
        isActive={isActive}
      />
    </Container>
  );
};

TweetCard.propTypes = {
  userObj: PropTypes.shape({
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    id: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
  setFollowedUsers: PropTypes.func.isRequired,
  followed: PropTypes.bool.isRequired,
};
