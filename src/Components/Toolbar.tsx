import React, { FC } from 'react';
import { ToolbarProps } from '../Types/client';

export const Toolbar: FC<ToolbarProps> = ({ checked, users, visible }) => {
  // Display the total selected count correctly with or without hidden
  const matchCount = users.filter((item) => checked.includes(item.id)).length;
  const totalSelected = visible || !matchCount ? 0 : matchCount;

  return (
    <div className="flex items-center h-20">
      <div className="ml-auto">
        <>
          {totalSelected} selected of {users.length}
        </>
      </div>
    </div>
  );
};
