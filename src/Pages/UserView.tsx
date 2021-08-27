import React, { FC, useState } from 'react';
import faker from 'faker';
import { Users } from '../Components/Users';
import { Search } from '../Components/Search';
import { UserData } from '../Types/client';

// Please add typings for this set of mock data
const mockUserData: UserData[] = [...new Array(30)].map((item, index) => ({
  id: index,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  count: faker.datatype.number()
}));

export const UserView: FC = () => {
  const [visible, setToggleVisibility] = useState(false);
  const [filteredList, setFilteredList] = useState<UserData[]>(mockUserData);
  const [selectedUser, setSelectedUser] = useState<number[]>([]);

  // Toggle selected users row visibility
  const toggleChecked = (e: any) => {
    setToggleVisibility(e.target.checked);
  };

  // Add or remove users from checked list
  const setChecked = (id: number) => {
    if (selectedUser.includes(id)) {
      const clearSelectedUser = selectedUser.filter((userId) => userId !== id);
      setSelectedUser(clearSelectedUser);
    } else {
      setSelectedUser([...new Set([...selectedUser, id])]);
    }
  };

  // Filter our selected users
  const notSelected = filteredList.filter((user) => !selectedUser?.includes(user.id));

  // Update users list with search results
  const setListData = (listData: UserData[]) => setFilteredList(listData);

  return (
    <div className="p-6">
      <Search
        users={mockUserData}
        toggleChecked={toggleChecked}
        setListData={setListData}
        resolved={visible ? notSelected : mockUserData}
      />
      <Users
        users={!visible ? filteredList : notSelected}
        setChecked={setChecked}
        checked={selectedUser}
        visible={visible}
      />
    </div>
  );
};
