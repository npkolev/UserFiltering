import React, { FC } from 'react';
import { Toolbar } from './Toolbar';
import { UserRow } from './UserRow';
import { UsersProps } from '../Types/client';

export const Users: FC<UsersProps> = ({ users, setChecked, checked = [], visible }) => {
  return (
    <div className="w-full">
      <Toolbar checked={checked} users={users} visible={visible} />
      {users.map((user) => (
        <UserRow key={user.id} user={user} setChecked={setChecked} checked={checked} />
      ))}
    </div>
  );
};
