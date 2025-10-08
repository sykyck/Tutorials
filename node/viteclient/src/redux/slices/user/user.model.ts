export interface User {
  _id: string;
  name: string;
  age: number;
}

export interface UserSlice {
    users: User[];
    currentUserPage: number;
    totalUsers: number;
    totalUserPages: number;
    isUsersFetching: boolean;
    isUsersFailed: boolean;
    isUsersSuccess: boolean;
}