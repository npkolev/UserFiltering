import React, { ChangeEvent, FC } from 'react';
import debounce from 'lodash/debounce';
import { SearchProps } from '../Types/client';

export const Search: FC<SearchProps> = ({ users, toggleChecked, setListData, resolved }) => {
  // Debounce to handle possible abuse of input field (not strictly necessary here)
  const debounceCallback = debounce((value: string) => {
    const search: string = value.trim().toUpperCase();
    if (search.length > 0) {
      const searchResult = resolved.filter((user) => {
        return (
          user.firstName.toUpperCase().includes(search) ||
          user.lastName.toUpperCase().includes(search)
        );
      });
      setListData(searchResult);
    } else {
      setListData(users);
    }
  }, 100);

  // Capture and set search input value
  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    debounceCallback(e.target.value);
  };

  return (
    <div className="p-3 pt-10 max-w rounded-md shadow-lg bg-gray-300">
      <input
        onChange={onInputChangeHandler}
        type="search"
        placeholder="Search..."
        className="border-2 w-full p-2 rounded-md"
      />
      <div className="flex justify-end items-center pt-1">
        <input type="checkbox" className="mr-1" onChange={toggleChecked} /> Hide Checked
      </div>
    </div>
  );
};
