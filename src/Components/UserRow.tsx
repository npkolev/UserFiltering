import React, { FC, useState } from 'react';
import { UserRowProps } from '../Types/client';

export const UserRow: FC<UserRowProps> = ({ user, setChecked, checked }) => {
  const { id, firstName, lastName, count } = user;
  // Keep track of checked state on toggle visibility
  const [isChecked, setIsChecked] = useState(checked.includes(id));

  return (
    <div className="bg-gray-50 flex flex-row p-3 mb-1">
      <div className="w-5">
        <input
          checked={isChecked}
          type="checkbox"
          onChange={() => {
            setChecked(id);
            setIsChecked(!isChecked);
          }}
        />
      </div>
      <div className="flex-1">{`${firstName} ${lastName}`}</div>
      <div>{count}</div>
    </div>
  );
};
