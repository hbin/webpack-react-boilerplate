import React from 'react';

import UserItem from './UserItem';

const UserList = ({
  users
}) => (
  <ul>
    {
      users.map(user =>
        <UserItem
            key={user.id}
            {...user}
        />
      )
    }
  </ul>
);

export default UserList;
