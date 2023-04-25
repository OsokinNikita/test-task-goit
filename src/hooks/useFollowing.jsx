export const useFollowing = (users, followedUsers) => {
  const followedId = [];

  users.forEach(user => {
    followedUsers.filter(item => {
      if (item.id === user.id) {
        followedId.push(item.id);
      }
      return item.id === user.id;
    });
  });

  return followedId;
};
