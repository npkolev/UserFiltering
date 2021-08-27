// Base data
export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  count: number;
};

// Components props types
export type SearchProps = {
  users: UserData[];
  resolved: UserData[];
  toggleChecked: (e: any) => void;
  setListData: (data: any) => void;
};

export type UsersProps = {
  users: UserData[];
  setChecked?: any;
  checked: number[];
  visible: boolean;
};

export type UserRowProps = {
  key: number;
  user: UserData;
  checked: number[];
  setChecked: (e: any) => void;
};

export type ToolbarProps = {
  checked: number[];
  users: UserData[];
  visible: boolean;
};
