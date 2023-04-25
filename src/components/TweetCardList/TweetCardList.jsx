import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TweetCard } from 'components/TweetCard/TweetCard';
import { List, Message } from './TweetCardList.styled';

export const TweetCardList = ({
  users,
  filter = 'all',
  setEnableFetch,
  followedId,
  setFollowedUsers,
  endOfResults,
}) => {
  const [list, setList] = useState([]);
  const [emptyMessage, setEmptyMessage] = useState(null);

  useEffect(() => {
    let newList = [];
    setEmptyMessage(null);
    if (!endOfResults) {
      setEnableFetch(true);
    }

    switch (filter) {
      case 'all':
        setList(users);
        break;

      case 'follow':
        newList = users.filter(user => !followedId.includes(user.id));
        setList(newList);
        break;

      case 'followings':
        newList = users.filter(user => followedId.includes(user.id));
        setList(newList);

        if (newList.length < 1) {
          setEnableFetch(false);
          setEmptyMessage('You have no followed tweets yet.');
          return;
        }

        break;

      default:
        return;
    }
  }, [filter, users, followedId, setEnableFetch, endOfResults]);

  return (
    <>
      <List>
        {list.map(user => {
          const followed = followedId.includes(user.id) ? true : false;

          return (
            <TweetCard
              key={user.id}
              userObj={user}
              setFollowedUsers={setFollowedUsers}
              followed={followed}
            />
          );
        })}
      </List>
      {emptyMessage && <Message>{emptyMessage}</Message>}
    </>
  );
};

TweetCardList.propTypes = {
  users: PropTypes.array.isRequired,
  filter: PropTypes.string,
  setEnableFetch: PropTypes.func.isRequired,
  followedId: PropTypes.array,
  setFollowedUsers: PropTypes.func.isRequired,
  endOfResults: PropTypes.bool.isRequired,
};
